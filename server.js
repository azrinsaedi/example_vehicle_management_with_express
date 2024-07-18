import express from 'express';
import http from 'http';
import vehicleRouter from './src/routes/vehicleRouter.js';

const app = express();
const port = 5100;

const server = http.createServer(app);
app.use('/', vehicleRouter);

server.listen(port, () => {
  console.log(`server running on PORT ${port}....`);
});
