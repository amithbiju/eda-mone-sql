const create = require("./crud/create");
const read = require("./crud/read");
const update = require("./crud/update");
const { del, delAll } = require("./crud/delete");
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
  edaMoneAdd(table, data) {
    return create(this.db, table, data);
  }

  // Read Function
  edaMoneReadOne(table, conditions) {
    return read(this.db, table, conditions);
  }

  edaMoneReadAll(table) {
    return read(this.db, table);
  }

  // Update Function
  edaMoneUpdate(table, data, conditions) {
    return update(this.db, table, data, conditions);
  }

  // Delete Function
  edaMoneDelete(table, conditions) {
    return del(this.db, table, conditions);
  }
  // Delete table
  edaMoneDeleteTable(table) {
    return delAll(this.db, table);
  }
}

module.exports = EdaMoneSQL;
