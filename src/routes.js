import express from "express";

import { getUfs, getCitiesByUf } from "./services/location.js";

const routes = express.Router();

routes.get("/get-ufs", async (req, res) => {
  res.send(await getUfs());
});

routes.get("/get-cities-uf/:uf", async (req, res) => {
  res.send(await getCitiesByUf(req.params.uf));
});

export { routes };
