import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import knex from '../knex.js'; 
import { readFile } from 'fs/promises';
import express from 'express';
import exif from 'exif-parser';
import { cp } from 'fs';
import { timeStamp } from 'console';
const commentRouter = express.Router();
commentRouter.post('/:image_id', async (req, res) => {
    let comment = req.body.comment;
    let id = req.params.image_id;
    let date = new Date().toISOString();
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
  commentRouter.delete('/:image_id', async (req, res) => {
    try {
      const { comment, timeStamp, user } = req.body;
      const id = req.params.image_id;
      const filePath = path.resolve('data', 'comment.json');
  
      if (!comment || !timeStamp || !user) {
        return res.status(400).json({
          resultMessage: 'Missing comment, timestamp, or user',
          resultCode: 0
        });
      }
  
      const fileData = await fs.readFile(filePath, 'utf8');
      const allComments = JSON.parse(fileData);
  
      const remaining = allComments.filter(c =>
        !(
          c.id === id &&
          c.comment === comment &&
          c.timeStamp === timeStamp &&
          c.user === user
        )
      );
  
      const deletedCount = allComments.length - remaining.length;
  
      if (deletedCount === 0) {
        return res.status(404).json({
          resultMessage: 'No matching comment found',
          resultCode: 0
        });
      }
  
      await fs.writeFile(filePath, JSON.stringify(remaining, null, 2), 'utf8');
  
      res.json({
        resultMessage: 'Comment deleted',
        resultCode: 1,
        deletedCount
      });
    } catch (err) {
      console.error('Failed to delete comment:', err);
      res.status(500).json({
        resultMessage: 'error',
        resultCode: 0,
        error: err.message
      });
    }
  });

  commentRouter.put('/:image_id', async (req, res) => {
    try {
      const imageId = req.params.image_id;
      const newComment = req.body;
  
      if (!newComment || !newComment.comment || !newComment.timeStamp || !newComment.user) {
        return res.status(400).json({
          resultMessage: 'Missing fields in updated comment',
          resultCode: 0
        });
      }

      const date = new Date().toISOString();
      const filePath = path.resolve('data', 'comment.json');
      const fileData = await fs.readFile(filePath, 'utf8');
      const allComments = JSON.parse(fileData);
  
      let found = false;
  
      const updatedComments = allComments.map(c => {
        const isMatch = c.timeStamp === newComment.timeStamp && c.user === newComment.user;
  
        if (isMatch) {
          found = true;
          return {
            ...newComment,
            id: imageId,
            timeStamp:date
          };
        }
  
        return c;
      });
  
      if (!found) {
        return res.status(404).json({
          resultMessage: 'No matching comment found',
          resultCode: 0
        });
      }
  
      await fs.writeFile(filePath, JSON.stringify(updatedComments, null, 2), 'utf8');
  
      res.json({
        resultMessage: 'Comment updated',
        resultCode: 1,
        date
      });
    } catch (err) {
      console.error('Failed to update comment:', err);
      res.status(500).json({
        resultMessage: 'Internal error',
        resultCode: 0,
        error: err.message
      });
    }
  });
  
  


  export default commentRouter;

