import express from 'express';
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('All photos');
});

router.post('/', (req, res) => {
  res.send('Add photo');
});

export default router;
