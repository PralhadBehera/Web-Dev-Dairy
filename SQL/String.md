# String Function

- **LENGTH** : It is used count the character in string 

Length```select length("Namaskaram SQL") as length;```

- **UPPER/LOWER** : UPPER/LOWER function converts all the characters in the specified string to  uppercase/lowercase

1. UPPER 
```sql select upper("Namaskaram SQL") as upper;```

2. LOWER 
```sql select lower("Namaskaram SQL") as upper;```

- **TRIM**
TRIM function removes all specified characters either from beginning or end of the string or both

1. TRIM
```sql select trim(" Namaskaram Sql ") as trim```

2. LTRIM
```sql select ltrim(" Namaskaram Sql ") as trim```

3. RTRIM
```sql select ltrim(" Namaskaram Sql ") as trim```

- CONCATENATION
|| operator used to concatenate two or more strings

```sql select first_name||" "||last_name as Full_Name from Customers``
