import axios from "axios";
import { Request } from "express";

export const getClients = (req: Request) => {
  return axios.get('http://localhost:8000/api/clients/all')
    .then((response) => response);
}
