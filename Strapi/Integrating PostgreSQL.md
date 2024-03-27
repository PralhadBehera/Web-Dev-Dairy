# intergarting the Strapi with  PostgreSQL

- *1 install the pg*
```bash 
npm install pg
```

- *2 go to this files*
```bash
root_directory\config\database.js 
```

-  *3 in thtat file make chnages as*
```bash
  module.exports = ({ env }) => ({
      defaultconnection: "deafult",
      connection:{
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'Web_Scraper'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'root'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
        },
      },
    });
    ```