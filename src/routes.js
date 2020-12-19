import express from "express";

import { getUfs, getCitiesByUf } from "./services/location.js";
import { createUpdatePeople } from "./services/people.js";

const routes = express.Router();

routes.get("/get-ufs", async (req, res) => {
  res.send(await getUfs());
});

routes.get("/get-cities-uf/:uf", async (req, res) => {
  res.send(await getCitiesByUf(req.params.uf));
});

routes.post("/create-update-person", async (req, res) => {
  const { _id, type, name, cpfCnpj, phone, city } = req.body;

  res.send(await createUpdatePeople({ _id, type, name, cpfCnpj, phone, city }));
});

export { routes };
