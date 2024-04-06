# **Buffer** 

Buffer are used to create ,read , write  and manipulate the binary content directly .

 ---------------------------
 ---------------------------


 **Creating  Buffer**

- Buffer.alloc()

```javascript 

let buff=Buffer.alloc(5);

console.log(buff1)

```

- Buffer.from() for array  

```javascript

let byteArray=[65, 66, 67, 68, 69];

let buff=Buffer.from(byteArray);

console.log(buff);
```

- Buffer.from for string

```javascript

let byteString= "  Namaskaram Javascript " ;

let buffString_1=Buffer.from(byteString,"utf-8");

console.log(buffString_1);
```