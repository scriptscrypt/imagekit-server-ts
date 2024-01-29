// src/index.ts
import express from 'express';
import imageKitRoute from '../src/routes/imagekit/index';

const app = express();
const port = 3000;

app.use('/api', imageKitRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
