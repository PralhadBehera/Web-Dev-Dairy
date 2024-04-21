- COMMIT: The COMMIT statement is used to permanently save any changes made during the current transaction to the database. It signifies that the transaction has been successfully completed and all changes should be made permanent.

- SAVEPOINT: SAVEPOINT is used to define a point within a transaction to which you can later roll back. It allows you to divide a transaction into smaller segments and roll back to a specific point if needed, rather than rolling back the entire transaction.

- ROLLBACK: The ROLLBACK statement is used to undo any changes made during the current transaction, either to a specified savepoint or to the beginning of the transaction. It reverses all the changes made since the last COMMIT or SAVEPOINT.

- GRANT: The GRANT statement is used to give specific privileges or permissions to a user or a role in the database. These privileges can include the ability to select, insert, update, delete, or execute certain operations on database objects.

- REVOKE: The REVOKE statement is used to take away previously granted privileges from a user or role. It cancels the permissions that were previously granted using the GRANT statement.