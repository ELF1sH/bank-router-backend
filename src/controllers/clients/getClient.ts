import axios from "axios";
import { Request } from "express";

export const getClient = (req: Request) => {
    const { id } = req.params;

    return axios.get(`http://localhost:8000/api/clients/${id}`)
        .then((response) => response);
}
