# EdaMoneSQL

**EdaMoneSQL** is a lightweight fun project, easy-to-use MySQL helper library for Node.js. It provides a simple interface for performing CRUD operations (`Create`, `Read`, `Update`, `Delete`) using JavaScript functions without writing raw SQL queries.

---

## Features

- Perform MySQL CRUD operations effortlessly.
- Simplified API for better readability and maintainability.
- Automatically handles database connection setup.
- Built on top of the reliable `mysql2` library.

---

## Installation

First, install the package using npm:

```bash
npm install eda-mone-sql
```

EdaMoneSQL Documentation

## Available Functions

### 1. **`edaMoneAdd(table, data)`**

Inserts a new record into the specified table. Automatically creates the table if it doesn’t exist.

#### **Parameters**

- `table` (string): The name of the table.
- `data` (object): An object containing key-value pairs where keys are column names and values are their corresponding values.

#### **Example**

```javascript
dbHelper
  .edaMoneAdd("users", { name: "John Doe", age: 30 })
  .then((result) => console.log("Record added:", result))
  .catch((err) => console.error("Error:", err));
```
