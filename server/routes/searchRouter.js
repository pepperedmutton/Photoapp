import path from 'path';
import knex from '../knex.js';
import express from 'express';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.resolve(__dirname, '../../data');

const searchRouter = express.Router();

searchRouter.post('/', async (req, res) => {
  try {
    const queryTags = req.body.tag; // expects array of tag names
    if (!Array.isArray(queryTags)) {
      return res.status(400).json({ message: 'Tags must be an array' });
    }

    const photos = await knex('photos').select('*');
    const foundPhotos = [];

    for (const photo of photos) {
      const photoTagIds = await knex('photos_tags')
        .select('tag_id')
        .where({ photo_id: photo.id });

      const tagIds = photoTagIds.map(tag => tag.tag_id);

      const tagNameRows = await Promise.all(tagIds.map(async tag_id => {
        const tag = await knex('tags').select('name').where({ id: tag_id }).first();
        return tag?.name?.toLowerCase() || '';
      }));

      const searchable = [
        ...Object.values({ ...photo, id: undefined }).map(v => String(v).toLowerCase()),
        ...tagNameRows
      ];

      const allMatch = queryTags.every(tag => searchable.includes(tag.toLowerCase()));
      if (allMatch) {
        foundPhotos.push(photo.id);
      }
    }

    res.json({
      resultMessage: 'success',
      resultCode: 1,
      foundPhotos
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Search failed' });
  }
});

export default searchRouter;
