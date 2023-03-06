import { getEmployees } from "./getEmployees";
import { createEmployee } from "./createEmployee";

export const employeesController = {
  getClients: getEmployees,
  createClient: createEmployee
}
