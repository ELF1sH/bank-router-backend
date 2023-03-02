import axios from "axios";
import {Request} from "express";

// TODO: create index.ts file in every controllers folder, create object that would contain all
// TODO: controllers and specify domain name constants

export const getClients = (req: Request) => {
  return axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response);
}