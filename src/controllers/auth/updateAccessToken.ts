import axios, {AxiosError} from "axios";

export const updateAccessToken = (req: any, res: any) => {
  axios.post(`${process.env.AUTHENTICATION_MS_URL}/update-access-token`, req.body)
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
