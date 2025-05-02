import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import knex from '../knex.js'; 
import { readFile } from 'fs/promises';
import express from 'express';
import exif from 'exif-parser';
const galleryRouter = express.Router();
//Gallery returns all photos uploaded by a user
//returns an array of objects,each one consists of 
galleryRouter.get('/', async (req, res) => {
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


export default imageRouter;
