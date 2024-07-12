"use strict";

const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");
const db = require("../db.js");
const Area = require("./area.js");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** findAll */

describe("findAll", function () {
  test("works", async function () {
    const areas = await Area.findAll();
    expect(areas).toEqual([
      {
        name: "a1",
        title: "A1",
        latitude: "lat1",
        longitude: "long1",
        description: "desc1",
        pictureUrl: "http://img1.img",
      },
      {
        name: "a2",
        title: "A2",
        latitude: "lat2",
        longitude: "long2",
        description: "desc2",
        pictureUrl: "http://img2.img",
      },
    ]);
  });
});

/************************************** get */

describe("get", function () {
  test("works", async function () {
    let area = await Area.get("a1");
    expect(area).toEqual({
        name: "a1",
        title: "A1",
        latitude: "lat1",
        longitude: "long1",
        description: "desc1",
        pictureUrl: "http://img1.img",
    });
  });

  test("not found if no such area", async function () {
    try {
      await Area.get("nope");
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });
});
