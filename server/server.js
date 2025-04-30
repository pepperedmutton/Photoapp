import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));


const PORT = process.env.PORT || 3000;


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });



  
app.listen(PORT, () => {
  console.log(`Server running on prot ${3000}`);
});
