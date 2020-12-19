import { Uf, City } from "../models/index.js";

export function getUfs() {
  return Uf.find({})
    .select({ _id: 0, uf: 1 })
    .orFail(() => {
      throw new Error("Não foram encontrados UFs cadastrados");
    });
}

export function getCitiesByUf(uf) {
  return City.find({ uf })
    .select({ _id: 0, cities: 1 })
    .orFail(() => {
      throw new Error("Não foram encontradas cidades para este UF");
    });
}
