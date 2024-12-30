const { v4: uuidv4 } = require("uuid");
const db = require("../db");

const create = (table, data, primaryKey = "id") => {
  return new Promise((resolve, reject) => {
    // Automatically generate primary key if not provided
    if (!data[primaryKey]) {
      data[primaryKey] = uuidv4();
    }

    const keys = Object.keys(data).join(", ");
    const values = Object.values(data);
    const placeholders = values.map(() => "?").join(", ");

    const sql = `INSERT INTO ${table} (${keys}) VALUES (${placeholders})`;

    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve({ result, insertedId: data[primaryKey] });
    });
  });
};

module.exports = create;
