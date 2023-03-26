import axios, { AxiosError } from "axios";

export const blockClient = (req: any, res: any) => {
  const { id } = req.params;
  const accessToken = req.headers['authorization'];

  axios.post(`${process.env.USERS_MS_URL}/clients/${id}/block`, req.body, {
    headers: { Authorization: accessToken }
  })
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
