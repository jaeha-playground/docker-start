import express from 'express';
import redis from 'redis';

const app = express();

// redis client 생성
const client = redis.createClient({
  socket: {
    host: 'redis-server',
    port: 6379,
  },
});

app.get('/', async (req, res) => {
  await client.connect();

  let number = await client.get('number');

  if (number === null) {
    number = 0;
  }

  console.log('Number: ' + number);

  res.send('숫자가 1씩 올라갑니다. 숫자: ' + number);

  await client.set('number', parseInt(number) + 1);

  await client.disconnect();
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});

console.log('123');
