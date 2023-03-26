import axios, { AxiosError } from "axios";

export const createCreditAccount = (req: any, res: any) => {
  const accessToken = req.headers['authorization'];

  axios.post(`${process.env.CREDITS_MS_URL}/create-credit-account`, req.body, {
    headers: { Authorization: accessToken }
  })
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
