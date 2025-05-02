import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import knex from '../knex.js'; 
import { readFile } from 'fs/promises';
import express from 'express';
import exif from 'exif-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
const dataDir = path.join(process.cwd(), 'data');
const galleryRouter = express.Router();
//Gallery returns all photos uploaded by a user
//returns an array of objects,each one consists of 
galleryRouter.get('/', async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  const user = await knex('users').select('id').where({ token }).first();
  if (!user) {
  return res.status(401).json({ message: 'Invalid token' });
  }
  const user_id = user.id;
  const filenames = await knex("photos").where({user_id}).filename;
  const fileArray = await Promise.all(filenames.map(async filename =>{
    const filePath = path.join(dataDir, filename);
    const buffer = await fs.readFile(filePath);
    const base64 = buffer.toString('base64');
    return base64;
  }))
  res.json({
    resultMessage: 'success',
    resultCode: 1,
    fileArray
  });
});


export default galleryRouter;
