import { Sequelize } from "sequelize";
import config from "../config/config.json";

export const sequelize = new Sequelize(
  config.test.database,
  config.test.username,
  config.test.password,
  {
    host: config.test.host,
    dialect: "postgres"
  }
);
