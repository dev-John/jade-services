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

export function getPeople() {
  return Person.find({});
}

export function searchPerson({ cpfCnpj, city, uf }) {
  return Person.find({ cpfCnpj, city, uf });
}

export function deletePerson(_id) {
  return Person.findByIdAndDelete(_id).orFail(() => {
    throw new Error("Falha ao deletar a pessoa");
  });
}
