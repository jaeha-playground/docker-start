import express, { Request, Response } from 'express';

const PORT = 4000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Docker!!!!!!!!!!!!!');
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
