import mongoose from "mongoose";

import baseSchema from "./base-schema.js";

const { Schema } = mongoose;

const schema = new Schema(
  {
    uf: { type: String, required: true },
    ufName: { type: String, required: true },
    cities: [{ type: String, required: true }],
  },
  baseSchema.options
);

export default schema;
