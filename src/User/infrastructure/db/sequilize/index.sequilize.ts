import "dotenv/config";
import { Sequelize } from "sequelize-typescript";
import { User } from "./models/User.model";

const {
  DB_USER_SEQUILIZE,
  DB_PASS_SEQUILIZE,
  DB_HOST_SEQUILIZE,
  DB_NAME_SEQUILIZE,
} = process.env;

const sequelize = new Sequelize({
  dialect: "postgres",
  database: DB_NAME_SEQUILIZE,
  username: DB_USER_SEQUILIZE,
  password: DB_PASS_SEQUILIZE,
  host: DB_HOST_SEQUILIZE,
  logging: false,
  models: [User],
});

sequelize
  .sync()
  .then(() => {
    console.log("Start database Postgres Typescritp-sequilize");
  })
  .catch((error) => {
    console.log(error);
  });

export default sequelize;
