import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import knex from './server/knex.js'; 
import { readFile } from 'fs/promises';
import express from 'express';
import exif from 'exif-parser';
const imageRouter = express.Router();
// Define routes
imageRouter.get('/', async (req, res) => {
  const id = Number(req.query.id)
  const filename = await knex('photos')
  .where({ id: id })
  .select('filename')
  .first()
  const filePath = path.resolve('data', filename);
  const data = await readFile(filePath, { encoding: 'base64' });
  res.json({
    resultMessage:"success",
    resultCode:1,
    data:{
      img:data
    }
  })
});

imageRouter.post('/', async (req, res) => {
  const data = req.body.img;
  const base64Data = data.includes('base64,')
  ? data.split(',')[1]
  : data;

  const buffer = Buffer.from(base64Data, 'base64');

  const parser = exif.create(buffer);
  const result = parser.parse();
  const tags = result.tags || {};

  const filename = `${uuidv4()}.jpg`;
  const filePath = path.resolve('data', filename);
  await fs.writeFile(filePath, buffer);

  await knex('photos').insert({
    filename,
    camera_make: tags.Make || null,
    camera_model: tags.Model || null,
    date_taken: tags.DateTimeOriginal || null,
    gps_lat: tags.GPSLatitude || null,
    gps_lng: tags.GPSLongitude || null,
    aperture:tags.FNumber || null,
    exposure_time: tags.ExposureTime || null,
 });
  res.json({
    resultMessage: 'success',
    resultCode: 1,
    filename,
    metadata: tags
  });

});

export default imageRouter;
