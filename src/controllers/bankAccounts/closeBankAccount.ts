import axios, { AxiosError } from "axios";

export const closeBankAccount = (req: any, res: any) => {
  const { id } = req.params;

  axios.post(`${process.env.KERNEL_MS_URL}/close-bank-account`, { id })
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
