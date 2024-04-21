# Constraint 

 - **Primary Key** - A primary key constraint is a rule defined on one or more columns in a table that uniquely identifies each row in the table.
  
  ```sql
  CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
  );
   ```

 - **Foreign key** - A foreign key constraint is a rule defined on one or more columns in a table that establishes a relationship between the data in that table and the data in another table. 

 ```sql
 CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```

- **Unique Key** - A unique key constraint is a rule defined on one or more columns in a table that ensures the values in those columns are unique across all rows in the table .

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);
```

- **Null Constraint** - The NULL constraint specifies whether a column can contain NULL values .

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50) NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100)
);
```

- **Not NULL Constraint** - The NOT NULL constraint specifies whether a column can contain no NULL values . 
```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50) NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100)
);
```

- **Check Constraint** - The CHECK constraint specifies a condition that must be satisfied for the values in a column.

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    salary DECIMAL(10, 2),
    CONSTRAINT salary_check CHECK (salary >= 0)
);
```