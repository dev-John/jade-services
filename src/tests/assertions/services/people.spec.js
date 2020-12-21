import test from "ava";

import { connect } from "../../../db/conn.js";

import {
  getPeople,
  getTableHead,
  getSearchTableHead,
} from "../../../services/people.js";

test.before(async () => {
  await connect();
});

test.serial("getPeople | pass test", async (t) => {
  const res = await getPeople({ page: 1, rowsPerPage: 5 });

  t.assert(res, "The people should have been brought");
});

test.serial("getTableHead PF | pass test", async (t) => {
  const res = await getTableHead("pf");

  t.assert(res, "The PF table-head should have been brought");
});

test.serial("getTableHead PJ | pass test", async (t) => {
  const res = await getTableHead("pj");

  t.assert(res, "The PJ table-head should have been brought");
});

test.serial("getTableHead GENERAL| pass test", async (t) => {
  const res = await getTableHead("general");

  t.assert(res, "The General table-head should have been brought");
});

test.serial("getSearchTableHead Search| pass test", async (t) => {
  const res = await getSearchTableHead();

  t.assert(res, "The Search table-head should have been brought");
});
