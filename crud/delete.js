const del = (db, table, conditions) => {
  return new Promise((resolve, reject) => {
    const keys = Object.keys(conditions)
      .map((key) => `${key} = ?`)
      .join(" AND ");
    const values = Object.values(conditions);

    const sql = `DELETE FROM ${table} WHERE ${keys}`;

    db.query(sql, values, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

const delAll = (db, table) => {
  return new Promise((resolve, reject) => {
    const sql = `DROP TABLE ${table}`;

    db.query(sql, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

module.exports = { del, delAll };
