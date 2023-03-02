import express, { Router } from "express";
import {getClients} from "../controllers/clients/getClients";
import makeExpressCallback from "../expressCallback";
import auth from "../middlewares/auth";

const router: Router = express.Router();

router.get('/a', auth, makeExpressCallback(getClients))

export default router;