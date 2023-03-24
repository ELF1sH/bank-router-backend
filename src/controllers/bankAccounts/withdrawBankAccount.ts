import axios, { AxiosError } from "axios";

export const withdrawBankAccount = (req: any, res: any) => {
  axios.post(`${process.env.KERNEL_MS_URL}/withdraw-bank-account`, req.body)
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
