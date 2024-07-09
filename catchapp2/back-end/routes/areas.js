"use strict";

/** Routes for areas. */

const express = require("express");
const Area = require("../models/area");

const router = express.Router();

/** GET / => { areas: [ {name, latitude, longitude, description, pictureUrl }, ... ] }
 *
 * Returns list of all areas.
 *
 **/

router.get("/", async function (req, res, next) {
  const q = req.query;
  try {
    const areas = await Area.findAll(q);
    console.log(areas);
    return res.json({ areas });
  } catch (err) {
    return next(err);
  }
});

/** GET /[name] => { area }
 *
 * Returns { name, latitude, longitude, description, pictureUrl }
 *
 **/

router.get("/:name", async function (req, res, next) {
  try {
    const area = await Area.get(req.params.name);
    return res.json({ area });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
