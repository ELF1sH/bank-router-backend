import axios, { AxiosError } from "axios";

export const getClient = (req: any, res: any) => {
  const { id } = req.params;
  const accessToken = req.headers['authorization'];

  axios.get(`${process.env.USERS_MS_URL}/clients/${id}`, {
    headers: { Authorization: accessToken }
  })
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
