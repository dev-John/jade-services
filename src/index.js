import express from "express";
import cors from "cors";

import { connect } from "./db/conn.js";
import { routes } from "./routes.js";

const app = express();
await connect();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(4000);

console.log("Server running on 4000");

process.on("unhandledRejection", (err) => {
  console.log(err);

  throw new Error("Ocorreu um erro na execução do servidor");
});
