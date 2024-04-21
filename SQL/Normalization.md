# Normalization

- **First Normal Form (1NF):**
In 1NF, a table is said to be in first normal form if it satisfies the following conditions:
  - Each table cell must contain a single, atomic (indivisible) value.
  - Each column must have a unique name.
  - The order of rows and columns does not matter.

  - **Example:**
       Consider a table storing information about students and their courses:

| StudentID | Name           | Courses                 |
|-----------|----------------|-------------------------|
| 1         | John Doe       | Math, Science, History  |
| 2         | Jane Smith     | English, Math           |
| 3         | Michael Johnson| History, Science        |

This table violates 1NF because the Courses column contains multiple values separated by commas, violating the atomicity requirement. To normalize it into 1NF, we would split the Courses column into multiple rows, like this:

| StudentID | Name           | Course  |
|-----------|----------------|---------|
| 1         | John Doe       | Math    |
| 1         | John Doe       | Science |
| 1         | John Doe       | History |
| 2         | Jane Smith     | English |
| 2         | Jane Smith     | Math    |
| 3         | Michael Johnson| History |
| 3         | Michael Johnson| Science |

----

- **Second Normal Form (2NF):** A table is in second normal form if it meets the criteria of 1NF and no non-prime attribute (attributes not part of the primary key) is dependent on only a portion of the primary key.

   - Example: Consider a table representing orders and their items:

| OrderID | ProductID | ProductName | Quantity |
|---------|-----------|-------------|----------|
| 1001    | 101       | Laptop      | 2        |
| 1001    | 102       | Mouse       | 1        |
| 1002    | 101       | Laptop      | 1        |


In this table, ProductName is dependent only on ProductID, which is a part of the primary key (OrderID, ProductID). To achieve 2NF, we would split the table into two separate tables:

Orders table:

| OrderID | ProductID | Quantity |
|---------|-----------|----------|
| 1001    | 101       | 2        |
| 1001    | 102       | 1        |
| 1002    | 101       | 1        |

Products table:

| ProductID | ProductName |
|-----------|-------------|
| 101       | Laptop      |
| 102       | Mouse       |

Now, ProductName is fully functionally dependent on ProductID in the Products table, satisfying 2NF.

------


- **Third Normal Form (3NF):**
  - A table is in third normal form if it meets the criteria of 2NF and no transitive dependency exists.
  - Example:
Consider a table storing information about books and their authors:

| BookID | BookTitle | AuthorID | AuthorName |
|--------|-----------|----------|------------|
| 1      | Book A    | 101      | John Doe   |
| 2      | Book B    | 102      | Jane Smith |
| 3      | Book C    | 101      | John Doe   |

In this table, AuthorName depends on AuthorID, and BookTitle depends on BookID. However, BookTitle also indirectly depends on AuthorID via AuthorName. To achieve 3NF, we would split the table into three separate tables:

Books table:

| BookID | BookTitle |
|--------|-----------|
| 1      | Book A    |
| 2      | Book B    |
| 3      | Book C    |

Authors Table:


| AuthorID | AuthorName |
|----------|------------|
| 101      | John Doe   |
| 102      | Jane Smith |

BookAuthors Table:

| BookID | AuthorID |
|--------|----------|
| 1      | 101      |
| 2      | 102      |
| 3      | 101      |
