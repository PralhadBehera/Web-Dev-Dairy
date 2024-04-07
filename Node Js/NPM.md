# NPM 

- NPM, which stands for Node Package Manager, is a package manager for JavaScript programming language. It is used to install, share, and manage dependencies in JavaScript projects

 - Developers can use NPM to install packages globally or locally in their projects.

 | Feature                            | Yarn                                       | npm                                                |
|------------------------------------|--------------------------------------------|----------------------------------------------------|
| Performance                        | Faster due to parallel downloads and caching | Slower than Yarn, but improved over time          |
| Caching                            | Caches every package downloaded             | Also has caching but may not be as robust          |
| Deterministic Dependency Resolution| Uses yarn.lock for consistent dependency resolution | Introduced package-lock.json for the same     |
| CLI and User Experience           | More concise and intuitive CLI             | Offers a wide range of commands and options        |
| Community and Ecosystem           | Slightly smaller ecosystem                 | Larger ecosystem with more packages available      |


 -------
 -------

 ## Installing Packages Locally

  ```javascript 
 cd my-project
npm install package-name

```
---------

## Installing Packages globally

```javascript 
npm install -g package-name
```

------------

## **Adding dependency in package Json**

If you have forgot to add dependencies then you can do this solution 

*Using npm:*

```javascript 
npm install lodash@4.17.21 --save
```
 
*Using yarn*

```javascript 
yarn add lodash@4.17.21
```
