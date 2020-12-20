import express from "express";
import { Person } from "./models/index.js";

import { getUfs, getCitiesByUf } from "./services/location.js";
import {
  createUpdatePeople,
  deletePerson,
  getPeople,
  searchPerson,
} from "./services/people.js";

const routes = express.Router();

routes.get("/get-ufs", async (req, res) => {
  res.send(await getUfs());
});

routes.get("/get-cities-uf/:uf", async (req, res) => {
  res.send(await getCitiesByUf(req.params.uf));
});

routes.post("/create-update-person", async (req, res, next) => {
  res.send(await createUpdatePeople(req, res, next));
});

routes.get("/get-people", async (req, res) => {
  res.send(await getPeople());
});

routes.get("/search-person/:cpfCnpj/:uf/:city", async (req, res) => {
  const { cpfCnpj, city, uf } = req.params;

  res.send(await searchPerson({ cpfCnpj, city, uf }));
});

routes.delete("/delete-person/:_id", async (req, res) => {
  const { _id } = req.params;

  res.send(await deletePerson(_id));
});

export { routes };
