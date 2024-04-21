# DDL

- **CREATE TABLE:** Used to create a new table in the database. It specifies the table name, column names, data types, constraints, and other attributes.
```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    GPA FLOAT
);
```

- **ALTER TABLE:** Used to modify the structure of an existing table by adding, modifying, or dropping columns or constraints.Example:
```sql
ALTER TABLE Students
ADD COLUMN Major VARCHAR(50);
```

- **DROP TABLE:** Used to delete an existing table and all its data from the database.Example:
```sql
DROP TABLE Students;
```

- **CREATE INDEX:** Used to create an index on one or more columns of a table, which improves the performance of data retrieval operations.Example:
```sql
CREATE INDEX idx_name ON Students (Name);
```

- **DROP INDEX:** Used to remove an existing index from the database.Example:
```sql
DROP INDEX idx_name;
```

- **CREATE VIEW:** Used to create a virtual table based on the result set of a SELECT query. Views are used for security, data abstraction, and simplifying complex queries.Example:
```sql
CREATE VIEW StudentSummary AS
SELECT Name, Age FROM Students WHERE GPA > 3.5;
```

- **DROP VIEW:** Used to remove an existing view from the database.Example:
```sql
DROP VIEW StudentSummary;
```

- **TRUNCATE** - When you use the TRUNCATE statement in SQL, it deletes all the data from the table but keeps the table structure intact. It's a way to quickly remove all records from a table without changing its schema or metadata
```sql
TRUNCATE TABLE table_name;
```

- **RENAME** - 
  - Rename Table 
  ```sql
  ALTER TABLE old_table_name RENAME TO new_table_name;
```

  - Rename Column

  - Rename Index
```sql
ALTER INDEX old_index_name RENAME TO new_index_name;
```