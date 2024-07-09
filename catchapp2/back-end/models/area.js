"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");

const { BCRYPT_WORK_FACTOR } = require("../config.js");

/** Related functions for areas. */

class Area {

/** Given an area name, return data about area.
   *
   * Returns { name, title, latitiude, longitude, description, pictureUrl }
   *
   * Throws NotFoundError if area not found.
   **/

  static async get(name) {
    const areaRes = await db.query(
          `SELECT name,
                  title,
                  latitude,
                  longitude,
                  description,
                  picture_url AS "pictureUrl"
           FROM areas
           WHERE name = $1`,
        [name]
    );

    const area = areaRes.rows[0];

    if (!area) throw new NotFoundError(`No area: ${name}`);

    return area;
  }

  /** Find all areas.
   *
   * Returns [{ name, title, latitiude, longitude, description, pictureUrl }, ...]
   **/

  static async findAll(searchFilters = {}) {
    let query = `SELECT name,
                        title,
                        latitude,
                        longitude,
                        description,
                        picture_url AS "pictureUrl"
                    FROM areas`;

    let whereExpressions = [];
    let queryValues = [];

    const { name } = searchFilters;

    if (name) {
      queryValues.push(`%${name}%`);
      whereExpressions.push(`name ILIKE $${queryValues.length}`);
    }

    if (whereExpressions.length > 0) {
      query += " WHERE " + whereExpressions.join(" AND ");
    }

    // Finalize query and return results
    query += " ORDER BY name";
    
    const areasRes = await db.query(query, queryValues);
    return areasRes.rows;
  }

}

module.exports = Area;
