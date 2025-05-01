import express from 'express';
const imageRouter = express.Router();
// Define routes
imageRouter.get('/api/image', async (req, res) => {
  let id = req.query.id;
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

imageRouter.post('/api/image', (req, res) => {
  const data = req.body.img;

});

export default imageRouter;
