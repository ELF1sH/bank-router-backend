import axios, { AxiosError } from "axios";

export const createClient = (req: any, res: any) => {
  const accessToken = req.headers['authorization'];

  axios.post(`${process.env.USERS_MS_URL}/create-client`, req.body, {
    headers: { Authorization: accessToken }
  })
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
