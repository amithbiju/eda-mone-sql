const read = (db, table, conditions = {}) => {
  return new Promise((resolve, reject) => {
    const keys = Object.keys(conditions)
      .map((key) => `${key} = ?`)
      .join(" AND ");
    const values = Object.values(conditions);

    const sql = keys
      ? `SELECT * FROM ${table} WHERE ${keys}`
      : `SELECT * FROM ${table}`;

    db.query(sql, values, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

module.exports = read;
