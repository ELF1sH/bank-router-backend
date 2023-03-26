import axios, { AxiosError } from "axios";

export const getEmployees = (req: any, res: any) => {
  const accessToken = req.headers['authorization'];

  axios.get(`${process.env.USERS_MS_URL}/employees/all`, {
    headers: { Authorization: accessToken }
  })
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
