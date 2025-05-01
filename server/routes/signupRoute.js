import express from 'express';
import knex from './server/knex.js';
import bcrypt from 'bcrypt';

const signupRouter = express.Router();

signupRouter.post('/api/signup', async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({
      resultMessage: 'Missing fields',
      resultCode: 0
    });
  }

  try {
    const existing = await knex('users').where({ email }).first();

    if (existing) {
      return res.json({
        resultMessage: 'failure',
        resultCode: 0,
        data: 'User already registered'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await knex('users').insert({
      email,
      name,
      password: hashedPassword
    });

    res.json({
      resultMessage: 'success',
      resultCode: 1,
      data: 'User registered'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      resultMessage: 'Server error',
      resultCode: 0
    });
  }
});

export default signupRouter;
