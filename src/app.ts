import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express();
import initSequilize from "./User/infrastructure/db/sequilize/index.sequilize";
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`listennig on port ${PORT}`);
  initSequilize(true);
});
