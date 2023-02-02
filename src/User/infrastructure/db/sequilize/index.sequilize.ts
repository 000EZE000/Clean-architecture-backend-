import "dotenv/config";
import { Sequelize } from "sequelize-typescript";
import { User } from "./models/User.model";

const {
  DB_USER_SEQUILIZE,
  DB_PASS_SEQUILIZE,
  DB_HOST_SEQUILIZE,
  DB_NAME_SEQUILIZE,
  DB_PORT_SEQUILIZE,
} = process.env;

const sequelize = new Sequelize({
  dialect: "postgres",
  database: DB_NAME_SEQUILIZE,
  username: DB_USER_SEQUILIZE,
  password: DB_PASS_SEQUILIZE,
  host: DB_HOST_SEQUILIZE,
  port: Number(DB_PORT_SEQUILIZE),
  logging: false,
  models: [User],
});

const initSequilize = (boolean: boolean = true) => {
  const alterOrForce = boolean ? { alter: true } : { force: true };
  const messageStatus = boolean ? "alter" : "force";
  sequelize
    .sync(alterOrForce)
    .then(() => {
      console.log(
        `Start Typescritp-sequilize database Postgres  status ${messageStatus}`
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

export default initSequilize;
