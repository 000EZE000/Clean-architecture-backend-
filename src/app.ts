import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();
import initSequilize from "./User/infrastructure/db/sequilize/index.sequilize";
import routerUser from "./User/infrastructure/router/use.router";
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(routerUser);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`listennig on port ${PORT}`);
  initSequilize(true);
});
