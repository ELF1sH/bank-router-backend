import axios, { AxiosError } from "axios";

export const getCreditAccounts = (req: any, res: any) => {
  const { ownerId } = req.query;
  const accessToken = req.headers['authorization'];

  axios.get(`${process.env.CREDITS_MS_URL}/credit-accounts/?ownerId=${ownerId}`, {
    headers: { Authorization: accessToken }
  })
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
