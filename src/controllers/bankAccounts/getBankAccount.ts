import axios, { AxiosError } from "axios";

export const getBankAccount = (req: any, res: any) => {
  const { id } = req.query;
  const accessToken = req.headers['authorization'];

  axios.get(`${process.env.KERNEL_MS_URL}/bank-account/?id=${id}`, {
    headers: { Authorization: accessToken }
  })
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
