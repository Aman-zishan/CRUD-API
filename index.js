import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.listen(PORT, () => console.log(`Server running on port : http://localhost:${PORT}`));