# view 

  - Concept on view 
    Views are virtual tables which contains whereas column from multiple table .
  
  - Create View 
    ```sql
    CREATE VIEW view_name AS
    SELECT column1, column2, ...
    FROM table_name
    WHERE condition;
    ```

  - Update view 
   We can't update the view 

  - Join in view 

  ```sql 
   CREATE VIEW employee_department_info AS
   SELECT e.employee_id, e.first_name, e.last_name, d.department_name
   FROM employees e
   JOIN departments d ON e.department_id = d.department_id;
   ```

  - Drop View 
    
    ```sql 
    DROP VIEW view_name;
    ```

    