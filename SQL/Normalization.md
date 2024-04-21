# Normalization

- **First Normal Form (1NF):
In 1NF, a table is said to be in first normal form if it satisfies the following conditions:
  - Each table cell must contain a single, atomic (indivisible) value.
  - Each column must have a unique name.
  - The order of rows and columns does not matter.

  Example:
Consider a table storing information about students and their courses:

StudentID	Name	Courses
1	John Doe	Math, Science, History
2	Jane Smith	English, Math
3	Michael Johnson	History, Science
This table violates 1NF because the Courses column contains multiple values separated by commas, violating the atomicity requirement. To normalize it into 1NF, we would split the Courses column into multiple rows, like this: