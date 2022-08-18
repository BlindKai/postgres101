import knex from "knex";
import config from "./knex.config";

export const pool = knex(config);
