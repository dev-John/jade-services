import mongoose from "mongoose";

import baseSchema from "./base-schema.js";

const { Schema } = mongoose;

const schema = new Schema(
  {
    type: { type: String, required: true }, // fisica / juridica
    name: { type: String, required: true },
    cpfCnpj: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    uf: { type: String, required: true },
  },
  baseSchema.options
);

export default schema;
