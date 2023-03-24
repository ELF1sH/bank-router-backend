import axios, { AxiosError } from "axios";

export const createEmployee = (req: any, res: any) => {
  axios.post(`${process.env.USERS_MS_URL}/create-employee`, req.body)
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
