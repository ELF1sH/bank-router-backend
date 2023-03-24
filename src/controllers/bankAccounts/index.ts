import {getBankAccounts} from "./getBankAccounts";
import {getBankAccount} from "./getBankAccount";
import {getOperationsHistory} from "./getOperationsHistory";
import {createBankAccount} from "./createBankAccount";
import {closeBankAccount} from "./closeBankAccount";
import {fillBankAccount} from "./fillBankAccount";
import {withdrawBankAccount} from "./withdrawBankAccount";

export const bankAccountsController = {
    getBankAccounts,
    getBankAccount,
    getOperationsHistory,
    createBankAccount,
    closeBankAccount,
    fillBankAccount,
    withdrawBankAccount
};
