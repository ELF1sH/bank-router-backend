import axios, { AxiosError } from "axios";

export const auth = async (req: any, res: any, next: any) => {
  const accessToken = req.headers['authorization'];

  try {
    await axios.post(`${process.env.AUTHENTICATION_MS_URL}/isAuthenticated`, {}, {
      headers: {
        Authorization: accessToken,
      },
    });

    await axios.post(`${process.env.AUTHORIZATION_MS_URL}/isAuthorized`, {
      requestUrl: req.url,
      requestBody: req.body,
    }, {
      headers: {
        Authorization: accessToken,
      },
    });

    next();
  } catch (e) {
    const error = e as AxiosError;
    res.status(error.response!.status).send(error.response!.data);
  }
}
