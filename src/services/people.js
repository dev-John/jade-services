import { Person } from "../models/index.js";

export function createUpdatePeople({ _id, type, name, cpfCnpj, phone, city }) {
  if (_id) {
    return Person.findByIdAndUpdate(_id, {
      type,
      name,
      cpfCnpj,
      phone,
      city,
    }).orFail(() => {
      throw new Error("Falha ao atualizar a pessoa");
    });
  }

  return Person.create({ type, name, cpfCnpj, phone, city });
}
