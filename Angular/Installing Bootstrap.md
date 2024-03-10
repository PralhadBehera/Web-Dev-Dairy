# Integrating the Bootstrap with Angular

## Install Bootstrap:
Open a terminal or command prompt.
Navigate to your Angular project directory.
Install Bootstrap via npm by running the following command
 ```bash 
 npm install bootstrap
 ```

 ## Import Bootstrap Styles
 Open the styles.scss or styles.css file in your Angular project's src directory.
Import Bootstrap styles by adding the following line at the top of the file

```javascript 
@import '~bootstrap/dist/css/bootstrap.min.css';

```
## Configure Angular.json

Open the angular.json file in your Angular project.
In the styles array, ensure that the Bootstrap CSS file is included:

```javascript 
"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],

```