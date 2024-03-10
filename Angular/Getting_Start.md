# Setting Up Angular Project:

## Install Node.js and npm:
Ensure Node.js and npm (Node Package Manager) are installed on your system. 
You can download and install them from the official Node.js website.

## Install Angular CLI:
Open a terminal or command prompt and install the Angular CLI globally 
by running the following command:
```bash
npm install -g @angular/cli
```
## Create a New Angular Project
Once Angular CLI is installed, you can create a new Angular project by running the following command in your terminal or command prompt:
```bash
ng new my-angular-project
```
## Navigate to Project Directory
After creating a new Angular project, navigate to its directory using the following command:
```bash
cd my-angular-project
```
## Running the Angular Application
Once you are inside the directory of your Angular project, you can run the application using the Angular CLI's ng serve command. This command compiles the application and launches a development server.
```bash 
ng serve
```
By default, the Angular application will be served at http://localhost:4200. You can open this URL in your web browser to view your Angular application.

Additionally, you can pass options to the ng serve command, such as specifying the host and port:

````bash
ng serve --host 0.0.0.0 --port 8080
```