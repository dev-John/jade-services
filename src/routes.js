import express from "express";

import { getUfs, getCitiesByUf } from "./services/location.js";
import {
  getTableHead,
  getSearchTableHead,
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

routes.get("/get-table-head/:type", (req, res) => {
  const { type } = req.params;

  res.send(getTableHead(type));
});

routes.get("/get-search-table-head", (req, res) => {
  res.send(getSearchTableHead());
});

routes.get("/get-people/:page/:rowsPerPage", async (req, res) => {
  const { page, rowsPerPage } = req.params;
  res.send(await getPeople({ page, rowsPerPage }));
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
