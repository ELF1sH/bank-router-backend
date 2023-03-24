import express, { Router } from "express";
import { clientsController } from "../controllers/clients";
import {employeesController} from "../controllers/employees";
import {bankAccountsController} from "../controllers/bankAccounts";
import {creditsController} from "../controllers/credits";

const router: Router = express.Router();

router.get('/clients/all', clientsController.getClients)
router.get('/clients/:id', clientsController.getClient)
router.post('/create-client', clientsController.createClient)
router.post('/clients/:id/block', clientsController.blockClient)

router.get('/employees/all', employeesController.getEmployees)
router.get('/employees/:id', employeesController.getEmployee)
router.post('/create-employee', employeesController.createEmployee)
router.post('/employees/:id/block', employeesController.blockEmployee)

router.get('/bank-accounts', bankAccountsController.getBankAccounts)
router.get('/bank-account', bankAccountsController.getBankAccount)
router.get('/operations-history', bankAccountsController.getOperationsHistory)
router.post('/create-bank-account', bankAccountsController.createBankAccount)
router.post('/bank-accounts/:id/close', bankAccountsController.closeBankAccount)
router.post('/fill-bank-account', bankAccountsController.fillBankAccount)
router.post('/withdraw-bank-account', bankAccountsController.withdrawBankAccount)

router.get('/credit-accounts', creditsController.getCreditAccounts)
router.get('/credit-accounts/:id', creditsController.getCreditAccount)
router.get('/tariffs/all', creditsController.getTariffs)
router.post('/create-tariff', creditsController.createTariff)
router.post('/create-credit-account', creditsController.createCreditAccount)

export default router;
