import test from "ava";

import { connect } from "../../../db/conn.js";

import { getCitiesByUf, getUfs } from "../../../services/location.js";

test.before(async () => {
  await connect();
});

test.serial("getUfs | pass test", async (t) => {
  const res = await getUfs();

  t.assert(res, "The UFs should have been brought");
});

test.serial("getCitiesByUf | pass test", async (t) => {
  const res = await getCitiesByUf("RJ");

  t.assert(res, "The cities from RJ should have been brought");
});
