# Constraint 

 - Primary Key - A primary key constraint is a rule defined on one or more columns in a table that uniquely identifies each row in the table.
  
  ```sql
  CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```

 - 
 