import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import knex from '../knex.js'; 
import { readFile } from 'fs/promises';
import express from 'express';
import exif from 'exif-parser';
import { cp } from 'fs';
const commentRouter = express.Router();
commentRouter.post('/:image_id', async (req, res) => {
    let comment = req.body.comment;
    let id = req.params.image_id;
    let date = new Date();
    comment.id = id;
    comment.timeStamp = date;
    
    const filePath = path.resolve('data', 'comment.json');
    const fileData = await fs.readFile(filePath, 'utf8');
    const jsonArray = JSON.parse(fileData);
    jsonArray.push(comment);
    await fs.writeFile(filePath, JSON.stringify(jsonArray, null, 2), 'utf8');
    res.json({
      resultMessage: 'success',
      resultCode: 1,
      date
    });
  });

  commentRouter.get('/:image_id', async (req, res) => {
    try {
      const id = req.params.image_id;
      const filePath = path.resolve('data', 'comment.json');
  
      // Read and parse the comment file
      const fileData = await fs.readFile(filePath, 'utf8');
      const allComments = JSON.parse(fileData);
  
      // Filter comments matching the image_id
      const filtered = allComments.filter(comment => comment.id == id);
  
      res.json({
        resultMessage: 'success',
        resultCode: 1,
        comments: filtered
      });
    } catch (err) {
      console.error('Failed to load comments:', err);
      res.status(500).json({
        resultMessage: 'error',
        resultCode: 0,
        error: err.message
      });
    }
  });
  


  export default commentRouter;

