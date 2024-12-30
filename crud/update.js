const db = require("../db");

const update = (table, data, conditions) => {
  return new Promise((resolve, reject) => {
    const updates = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(", ");
    const values = Object.values(data);

    const keys = Object.keys(conditions)
      .map((key) => `${key} = ?`)
      .join(" AND ");
    const conditionValues = Object.values(conditions);

    const sql = `UPDATE ${table} SET ${updates} WHERE ${keys}`;
    const allValues = [...values, ...conditionValues];

    db.query(sql, allValues, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

module.exports = update;
