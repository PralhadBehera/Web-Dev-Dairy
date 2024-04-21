# DATE-TIME FUNCTIONS

- CURRENT_DATE
  ```select date() as date;```

- CURRENT_TIME
  ```select time() as time;```

- CURRENT_TIMESTAMP
  ```SELECT CURRENT_TIMESTAMP AS current_datetime;```

- AGE
  - Certainly! Let's assume you have a table named persons with the following structure:

```sql 
CREATE TABLE persons (
    person_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE); 
```
   - And the table contains some sample data:
   ```sql
   INSERT INTO persons (person_id, first_name, last_name, date_of_birth)
VALUES
    (1, 'John', 'Doe', '1990-05-15'),
    (2, 'Jane', 'Smith', '1985-10-20'),
    (3, 'Michael', 'Johnson', '1978-03-08');
  ```


  