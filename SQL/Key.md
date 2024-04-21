# KEY

- **Primary Key (PK)**:
  - primary key is a column or set of columns in a table that uniquely identifies each row.
  - It must contain unique values and cannot contain NULL values.
  - Every table should have a primary key.
  - Example: EmployeeID in an Employees table.

- **Composite Key:**
  - A composite key consists of two or more columns that uniquely identify each row when their values are combined.
  - Used when no single column uniquely identifies a row.
  - Example: Combination of (OrderID, ProductID) in an OrderDetails table.

- **Foreign Key (FK):**
  - A foreign key is a column or set of columns in a table that refers to the primary key or a unique key in another table.
  - It establishes a relationship between two tables.
  - Helps maintain referential integrity.
  - Example: CustomerID in an Orders table referencing the CustomerID column in a Customers table.

- **Unique Key:**
  - A unique key ensures that all values in a column or a set of columns are unique.
  - Unlike the primary key, a unique key can contain NULL values.
  - Example: EmailAddress in a Users table.

- **Super Key:**
  - A super key is a set of one or more columns that uniquely identifies each row in a table.
  - It may contain more columns than necessary to uniquely identify rows.
  - Example: (EmployeeID, FirstName) in an Employees table.

