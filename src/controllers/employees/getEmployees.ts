import axios, { AxiosError } from "axios";

export const getEmployees = (req: any, res: any) => {
  axios.get(`${process.env.USERS_MS_URL}/employees/all`)
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
