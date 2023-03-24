import { getClients } from "./getClients";
import { createClient } from "./createClient";
import { getClient } from "./getClient";
import {blockClient} from "./blockClient";

export const clientsController = {
  getClients,
  getClient,
  createClient,
  blockClient
}
