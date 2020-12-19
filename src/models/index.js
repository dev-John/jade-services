import mongoose from "mongoose";

import uf from "./uf.js";
import city from "./city.js";

export const Uf = mongoose.model("ufs", uf);
export const City = mongoose.model("cities", city);
