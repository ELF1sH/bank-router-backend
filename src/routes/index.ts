import express, { Router } from "express";
import makeExpressCallback from "../expressCallback";
import auth from "../middlewares/auth";
import { clientsController } from "../controllers/clients";
import {employeesController} from "../controllers/employees";

const router: Router = express.Router();

router.get('/clients/all', auth, makeExpressCallback(clientsController.getClients))
router.get('/clients/:id', auth, makeExpressCallback(clientsController.getClient))
router.get('/create-client', auth, makeExpressCallback(clientsController.createClient))

router.get('/get-employees', auth, makeExpressCallback(employeesController.getClients))
router.get('/create-employee', auth, makeExpressCallback(employeesController.createClient))

export default router;
