import express from 'express';

const PORT = 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello docker!!!!!!!!!!!');
});

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
