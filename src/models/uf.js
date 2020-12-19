import mongoose from "mongoose";

import baseSchema from "./base-schema.js";

const { Schema } = mongoose;

const schema = new Schema(
  {
    name: { type: String, required: true },
    uf: { type: String, required: true },
  },
  baseSchema.options
);

export default schema;
