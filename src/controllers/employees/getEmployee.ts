import axios, { AxiosError } from "axios";

export const getEmployee = (req: any, res: any) => {
  const { id } = req.params;

  axios.get(`${process.env.USERS_MS_URL}/employees/${id}`)
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
