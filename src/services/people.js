import {
  PF_COLUMS,
  PJ_COLUMNS,
  GENERAL_COLUMNS,
  SEARCH_TABLE_COLUMNS,
} from "../constants/table-head.js";
import { Person } from "../models/index.js";
import { ErrorHandler } from "../utils/error-handler.js";

export async function createUpdatePeople(req, res, next) {
  const { _id, type, name, cpfCnpj, phone, city, uf, birthDate } = req.body;

  try {
    const person = await Person.find({ cpfCnpj });

    if (!_id && person.length > 0) {
      throw new ErrorHandler(500, "Já existe um cadastro com este CPF/CNPJ!");
    }

    await (!_id
      ? Person.create({ type, name, cpfCnpj, phone, city, uf, birthDate })
      : Person.findByIdAndUpdate(_id, {
          type,
          name,
          cpfCnpj,
          phone,
          city,
          uf,
        }));

    next();
  } catch (error) {
    next(error);
  }
}

export async function getPeople({ page, rowsPerPage }) {
  const people = await Person.find({})
    .limit(parseInt(rowsPerPage))
    .skip(parseInt(rowsPerPage) * parseInt(page))
    .sort({ name: "asc" });

  const totalPeople = await Person.count({});

  return { people, totalPeople };
}

export function searchPerson({ cpfCnpj, city, uf }) {
  return Person.find({ cpfCnpj, city, uf });
}

export function deletePerson(_id) {
  return Person.findByIdAndDelete(_id).orFail(() => {
    throw new Error("Falha ao deletar a pessoa");
  });
}

export function getTableHead(type) {
  switch (type) {
    case "pf":
      return PF_COLUMS;
      break;
    case "pj":
      return PJ_COLUMNS;
    default:
      return GENERAL_COLUMNS;
  }
}

export function getSearchTableHead() {
  return SEARCH_TABLE_COLUMNS;
}
