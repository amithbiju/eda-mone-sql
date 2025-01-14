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

### **`Connection`**

Connetion establishment to SQL Database

#### **Parameters**

- `host` (string): The hostname or IP address of the database server (e.g., "localhost").
- `user` (string): The username used to authenticate with the database (e.g., "root").
- `password` (string): The password associated with the user account (e.g., "your_password").
- `database` (string): The name of the database to connect to (e.g., "your_database").

#### **Example**

```javascript
const config = {
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "your_database",
};

const ambane = new EdaMoneSQL(config);
```

### 1. **`edaMoneAdd(table, data)`**

Inserts a new record into the specified table. Automatically creates the table if it doesn’t exist.

#### **Parameters**

- `table` (string): The name of the table.
- `data` (object): An object containing key-value pairs where keys are column names and values are their corresponding values.

#### **Example**

```javascript
ambane
  .edaMoneAdd("users", { name: "John Doe", age: 30 })
  .then((result) => console.log("Record added:", result))
  .catch((err) => console.error("Error:", err));
```

### 2. **`edaMoneReadOne(table, conditions)`**

Reads a single record from the specified table based on the given conditions.

#### **Parameters**

- `table` (string): The name of the table.
- `data` (object): An object representing the conditions (e.g., { id: 1 }).

#### **Example**

```javascript
ambane
  .edaMoneReadOne("users", { id: 1 })
  .then((record) => console.log("Record found:", record))
  .catch((err) => console.error("Error:", err));
```

### 3. **`edaMoneReadAll(table)`**

Reads all records from the specified table.

#### **Parameters**

- `table` (string): The name of the table.

#### **Example**

```javascript
ambane
  .edaMoneReadAll("users")
  .then((records) => console.log("All records:", records))
  .catch((err) => console.error("Error:", err));
```

### 4. **`edaMoneUpdate(table, data, conditions)`**

Updates records in the specified table based on the given conditions.

#### **Parameters**

- `table` (string): The name of the table.
- `data` (object): Key-value pairs of columns to update and their new values.
- `conditions` (object): An object representing the conditions (e.g., { id: 1 }).

#### **Example**

```javascript
ambane
  .edaMoneUpdate("users", { age: 35 }, { id: 1 })
  .then((result) => console.log("Record updated:", result))
  .catch((err) => console.error("Error:", err));
```

### 5. **`edaMoneDelete(table, conditions)`**

Deletes records from the specified table based on the given conditions.

#### **Parameters**

- `table` (string): The name of the table.
- `conditions` (object): An object representing the conditions for deletion (e.g., `{ id: 1 }`).

#### **Example**

```javascript
ambane
  .edaMoneDelete("users", { id: 1 })
  .then((result) => console.log("Record deleted:", result))
  .catch((err) => console.error("Error:", err));
```

### 6. **`edaMoneDeleteTable(table)`**

Deletes (drops) a specified table from the database.

#### **Parameters**

- `table` (string): The name of the table.

#### **Example**

```javascript
ambane
  .edaMoneDeleteTable(db, "users")
  .then((result) => console.log("Table dropped:", result))
  .catch((err) => console.error("Error:", err));
```
