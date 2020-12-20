import { Person } from "../models/index.js";

export function createUpdatePeople({
  _id,
  type,
  name,
  cpfCnpj,
  phone,
  city,
  uf,
}) {
  if (_id) {
    return Person.findByIdAndUpdate(_id, {
      type,
      name,
      cpfCnpj,
      phone,
      city,
      uf,
    }).orFail(() => {
      throw new Error("Falha ao atualizar a pessoa");
    });
  }

  return Person.create({ type, name, cpfCnpj, phone, city, uf });
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
