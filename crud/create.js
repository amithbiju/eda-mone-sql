const { v4: uuidv4 } = require("uuid");

const create = (db, table, data, primaryKey = "id") => {
  return new Promise((resolve, reject) => {
    // Automatically generate primary key if not provided
    if (!data[primaryKey]) {
      data[primaryKey] = uuidv4();
    }

    const keys = Object.keys(data).join(", ");
    const values = Object.values(data);
    const placeholders = values.map(() => "?").join(", ");

    // Generate SQL for table creation with type inference
    const inferDataType = (value) => {
      if (typeof value === "number") {
        return Number.isInteger(value) ? "INT" : "FLOAT";
      } else if (typeof value === "string") {
        return "VARCHAR(255)";
      } else if (value instanceof Date) {
        return "DATETIME";
      } else {
        return "TEXT"; // Default type for unsupported types
      }
    };

    // Create column definitions excluding primaryKey from the columns list
    const columns = Object.keys(data)
      .filter((key) => key !== primaryKey)
      .map((key) => `${key} ${inferDataType(data[key])}`)
      .join(", ");

    // Generate the CREATE TABLE query
    const createTableSQL = `CREATE TABLE IF NOT EXISTS ${table} (${primaryKey} VARCHAR(255) PRIMARY KEY, ${columns})`;

    // Execute the query to ensure the table exists
    db.query(createTableSQL, (tableErr) => {
      if (tableErr) {
        return reject(`Error creating table ${table}: ${tableErr.message}`);
      }

      // Proceed with the insert operation
      const sql = `INSERT INTO ${table} (${keys}) VALUES (${placeholders})`;

      db.query(sql, values, (insertErr, result) => {
        if (insertErr) {
          return reject(insertErr);
        }
        resolve({ result, insertedId: data[primaryKey] });
      });
    });
  });
};

module.exports = create;
