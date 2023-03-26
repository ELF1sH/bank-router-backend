import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from "./routes/index";
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/api', router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.use(async (req, res) => {
  res.status(404).send(`Route is no where to be found.`);
});
