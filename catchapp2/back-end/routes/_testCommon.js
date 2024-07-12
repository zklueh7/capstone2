"use strict";

const db = require("../db.js");
const User = require("../models/user");
const { createToken } = require("../helpers/tokens");


async function commonBeforeAll() {
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM areas");
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM users");

  await User.register({
    username: "u1",
    firstName: "U1F",
    lastName: "U1L",
    email: "user1@user.com",
    password: "password1",
    climbingType: "Sport",
    experienceLevel: "1 year",
    pictureUrl: "http://img1.img",
    lookingForPartners: "Yes",
  });
  await User.register({
    username: "u2",
    firstName: "U2F",
    lastName: "U2L",
    email: "user2@user.com",
    password: "password2",
    climbingType: "Sport",
    experienceLevel: "1 year",
    pictureUrl: "http://img2.img",
    lookingForPartners: "Yes",
  });

}

async function commonBeforeEach() {
  await db.query("BEGIN");
}

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}


const u1Token = createToken({ username: "u1", isAdmin: false });
const u2Token = createToken({ username: "u2", isAdmin: false });


module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  u1Token,
  u2Token,
};
