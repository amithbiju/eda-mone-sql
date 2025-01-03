const create = require("./crud/create");
const read = require("./crud/read");
const update = require("./crud/update");
const del = require("./crud/delete");
const mysql = require("mysql2");

class EdaMoneSQL {
  constructor(config) {
    this.db = mysql.createConnection(config);

    // Connect to the database
    this.db.connect((err) => {
      if (err) {
        console.error("Error connecting to the database:", err);
      } else {
        console.log("Connected to the database");
      }
    });
  }

  // Create Function
  moneAdd(table, data) {
    return create(this.db, table, data);
  }

  // Read Function
  moneRead(table, conditions) {
    return read(this.db, table, conditions);
  }

  // Update Function
  moneUpdate(table, data, conditions) {
    return update(this.db, table, data, conditions);
  }

  // Delete Function
  moneDelete(table, conditions) {
    return del(this.db, table, conditions);
  }
}

module.exports = EdaMoneSQL;
