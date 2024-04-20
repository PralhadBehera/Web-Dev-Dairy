# String Function

- **LENGTH** : It is used count the character in string 

Length```select length("Namaskaram SQL") as length;```

- **UPPER/LOWER** : UPPER/LOWER function converts all the characters in the specified string to  uppercase/lowercase

1. UPPER 
```select upper("Namaskaram SQL") as upper;```

2. LOWER 
```select lower("Namaskaram SQL") as upper;```

- **TRIM**
TRIM function removes all specified characters either from beginning or end of the string or both

1. TRIM
```select trim(" Namaskaram Sql ") as trim```

2. LTRIM
```select ltrim(" Namaskaram Sql ") as trim```

3. RTRIM
```select ltrim(" Namaskaram Sql ") as trim```

- CONCATENATION
|| operator used to concatenate two or more strings

Concatenation ```select first_name||" "||last_name as Full_Name from Customers```
