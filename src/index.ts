import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from "./routes/index";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// app.get('/hello', (req: Request, res: Response) => {
//   axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => {
//       res.send(response.data);
//     })
//
//   // res.send('Express + TypeScript Server');
// });


app.use('/api', router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.use(async (req, res) => {
  res.status(404).send(`Route is no where to be found.`);
});
