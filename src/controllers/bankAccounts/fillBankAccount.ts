import axios, { AxiosError } from "axios";

export const fillBankAccount = (req: any, res: any) => {
  axios.post(`${process.env.KERNEL_MS_URL}/fill-bank-account`, req.body)
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
