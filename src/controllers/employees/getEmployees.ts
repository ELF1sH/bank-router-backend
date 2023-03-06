import axios from "axios";
import { Request } from "express";

export const getEmployees = (req: Request) => {
  return axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response);
}
