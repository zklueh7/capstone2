const bcrypt = require("bcrypt");

const db = require("../db.js");
const { BCRYPT_WORK_FACTOR } = require("../config");

async function commonBeforeAll() {
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM areas");
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM users");

  await db.query(`
    INSERT INTO areas (name, title, latitude, longitude, description, picture_url)
    VALUES ('a1', 'A1', 'lat1', 'long1', 'desc1', 'http://img1.img'),
           ('a2', 'A2', 'lat2', 'long2', 'desc2', 'http://img2.img')`);

  await db.query(`
        INSERT INTO users (username,
                          password,
                          first_name,
                          last_name,
                          email,
                          looking_for_partners,
                          climbing_type,
                          experience_level,
                          picture_url)
        VALUES ('u1', $1, 'U1F', 'U1L', 'u1@email.com', 'Yes', 'Sport', '1 year', 'http://img1.img'),
               ('u2', $2, 'U2F', 'U2L', 'u2@email.com', 'Yes', 'Trad', '10 years', 'http://img2.img')
        RETURNING username`,
      [
        await bcrypt.hash("password1", BCRYPT_WORK_FACTOR),
        await bcrypt.hash("password2", BCRYPT_WORK_FACTOR),
      ]);
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


module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
};