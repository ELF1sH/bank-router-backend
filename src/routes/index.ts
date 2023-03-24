import express, { Router } from "express";
import auth from "../middlewares/auth";
import { clientsController } from "../controllers/clients";
import {employeesController} from "../controllers/employees";
import {bankAccountsController} from "../controllers/bankAccounts";
import {creditsController} from "../controllers/credits";

const router: Router = express.Router();

router.get('/clients/all', auth, clientsController.getClients)
router.get('/clients/:id', auth, clientsController.getClient)
router.post('/create-client', auth, clientsController.createClient)
router.post('/clients/:id/block', auth, clientsController.blockClient)

router.get('/employees/all', auth, employeesController.getEmployees)
router.get('/employees/:id', auth, employeesController.getEmployee)
router.post('/create-employee', auth, employeesController.createEmployee)
router.post('/employees/:id/block', auth, employeesController.blockEmployee)

router.get('/bank-accounts', auth, bankAccountsController.getBankAccounts)
router.get('/bank-account', auth, bankAccountsController.getBankAccount)
router.get('/operations-history', auth, bankAccountsController.getOperationsHistory)

router.get('/credit-accounts', auth, creditsController.getCreditAccounts)
router.get('/tariffs/all', auth, creditsController.getTariffs)
router.post('/create-tariff', auth, creditsController.createTariff)

export default router;
