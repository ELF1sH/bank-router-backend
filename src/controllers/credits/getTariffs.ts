import axios, { AxiosError } from "axios";

export const getTariffs = (req: any, res: any) => {
  axios.get(`${process.env.CREDITS_MS_URL}/tariffs/all`)
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
