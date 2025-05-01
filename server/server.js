import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import knex from './knex.js';
import bcrypt from 'bcrypt';
import path from 'path';
import jwt from 'jsonwebtoken';
import imageRouter from './routes/photoRoutes.js'
import authMiddleware from './middleWare/auth.js'
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const JWT_SECRET = process.env.JWT_KEY || "supersecret";
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/photo_app/dist')));


const PORT = process.env.PORT || 3000;

app.post("/api/login",async (req,res)=>{
    let{email,password} = req.body;
    const user = await knex('users').where({ email }).first();
    if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
    return res.json({
      resultMessage: 'success',
      resultCode: 1,
      token
    });
      }
    res.status(401).json({ success: false, message: 'Invalid credentials' });
})
app.use('/api/signup',imageRouter);
app.use('/api/images',authMiddleware,imageRouter);

app.listen(PORT, () => {
  console.log(`Server running on prot ${3000}`);
});
