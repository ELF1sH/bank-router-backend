import axios, { AxiosError } from "axios";

export const auth = async (req: any, res: any, next: any) => {
  const accessToken = req.headers['authorization'];

  try {
    const result = await axios.post(`${process.env.AUTHENTICATION_MS_URL}/isAuthenticated`, {}, {
      headers: {
        Authorization: accessToken,
      },
    });

    if (result.status === 200) {
      next();
    }
  } catch (e) {
    const error = e as AxiosError;
    res.status(error.response!.status).send(error.response!.data);
  }
}
