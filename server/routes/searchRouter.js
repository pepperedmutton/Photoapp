
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import knex from '../knex.js'; 
import { readFile } from 'fs/promises';
import express from 'express';
import exif from 'exif-parser';

import { fileURLToPath } from 'url';
import fs from 'fs/promises';
const dataDir = path.join(process.cwd(), 'data');
const searchRouter = express.Router();
//Gallery returns all photos uploaded by a user
//returns an array of objects,each one consists of 
searchRouter.get('/', async (req, res) => {
  const queryTags = req.tag;
  const photos = await knex('photos').select('*');
  let foundPhotos = [];
  for(photo in photos){
    const tags = await knex('photos_tags')
    .select('tag_id')
    .where({'photo_id':photo.id});
    tags = tags.map(tag=>tag.tag_id);
    tags = await Promise.all(tags.map(async tag_id=>{
        let tag = await knex('tags')
        .select('name')
        .where({id:tag_id})
        return tag;
    }))
  }
  photo.id = undefined;
  const searchable = Object.values(photo);
  searchable = [... tags];
  if (queryTags.every(tag=>searchable.includes(tag))){
    foundPhotos.push(photo.id)
  }
  res.json(
    {
    resultMessage:"success",
    resultCode:1,
    foundPhotos
    }
  )
});


export default searchRouter;
