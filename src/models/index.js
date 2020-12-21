import mongoose from "mongoose";

import uf from "./uf.js";
import city from "./city.js";
import person from "./person.js";

export const Uf = mongoose.model("ufs", uf);
export const City = mongoose.model("cities", city);
export const Person = mongoose.model("people", person);
