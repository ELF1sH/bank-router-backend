import {AxiosResponse} from "axios";

const makeExpressCallback = (controller: Function) => {
  return (req: any, res: any) => {
    controller(req)
      .then((httpResponse: AxiosResponse) => {
        if (httpResponse.headers) {
          res.set('Access-Control-Allow-Origin', '*');
          res.set(httpResponse.headers);
        }
        res.type('json');
        res.status(httpResponse.status).send(httpResponse.data);
      })
      .catch((e: string) => res.sendStatus(res.status !== 200 ? res.status : 500));
  };
};

export default makeExpressCallback;
