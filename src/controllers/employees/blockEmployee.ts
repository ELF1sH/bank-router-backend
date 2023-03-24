import axios, { AxiosError } from "axios";

export const blockEmployee = (req: any, res: any) => {
  const { id } = req.params;

  axios.post(`${process.env.USERS_MS_URL}/employees/${id}/block`, req.body)
    .then((response) => (
      res.status(response.status).send(response.data)
    ))
    .catch((e: AxiosError) => (
      res.status(e.response?.status).send(e.response?.data)
    ));
};
