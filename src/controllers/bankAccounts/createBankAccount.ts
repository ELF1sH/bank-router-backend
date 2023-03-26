import axios, { AxiosError } from "axios";

export const createBankAccount = (req: any, res: any) => {
  const accessToken = req.headers['authorization'];

  axios.post(`${process.env.KERNEL_MS_URL}/open-bank-account`, req.body, {
    headers: { Authorization: accessToken }
  })
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
