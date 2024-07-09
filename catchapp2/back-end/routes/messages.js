"use strict";

/** Routes for messages. */

const express = require("express");
const Message = require("../models/message");

const router = express.Router();

/** GET / => { messages: [ id, latitude, longitude, description, pictureUrl }, ... ] }
 *
 * Returns list of all areas.
 *
 **/

router.get("/", async function (req, res, next) {
  try {
    const q = req.query;
    console.log(q);
    const messages = await Message.findAll(q);
    console.log(messages);
    return res.json({ messages });
  } catch (err) {
    return next(err);
  }
});

/** GET /[id] => { message }
 *
 * Returns { name, latitude, longitude, description, pictureUrl }
 *
 **/

router.get("/:id", async function (req, res, next) {
  try {
    const message = await Message.get(req.params.area);
    return res.json({ message });
  } catch (err) {
    return next(err);
  }
});

/** POST / { messages }
 *
 * Returns { messages }
 *
 **/

router.post("/", async function (req, res, next) {
  try {
    const message = await Message.create(req.body);
    return res.json({ message });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
