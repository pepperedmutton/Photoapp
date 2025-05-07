import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import knex from "./knex.js";
import bcrypt from "bcrypt";
import path from "path";
import jwt from "jsonwebtoken";
import imageRouter from "./routes/photoRoutes.js";
import signupRouter from "./routes/signupRoute.js";
import authMiddleware from "./middleWare/auth.js";
import dotenv from "dotenv";
import commentRouter from "./routes/commentRouter.js";
import galleryRouter from "./routes/galleryRouter.js";
import searchRouter from "./routes/searchRouter.js";
dotenv.config({ path: "../.env" });

const JWT_SECRET = process.env.JWT_SECRET;
// console.log("jwt secret:", JWT_SECRET);
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/photo_app/dist")));

const PORT = 3000;

app.post("/api/login", async (req, res) => {
  let { email, password } = req.body;
  // console.log(req.body);
  const user = await knex("users").where({ email }).first();
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: "1h" });
    // await knex("users").where({ email: email }).update({ token: token }); // This should not be happening.
    return res.json({
      resultMessage: "success",
      resultCode: 1,
      token,
    });
  }
  res.status(401).json({ success: false, message: "Invalid credentials" });
});
app.use("/api/signup", signupRouter);
app.use("/api/image", authMiddleware, imageRouter);
app.use("/api/images", authMiddleware, imageRouter);
app.use("/api/comments", authMiddleware, commentRouter);
app.use("/api/gallery", authMiddleware, galleryRouter);
app.use("/api/search", authMiddleware, searchRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
