# TypeScript React Crud Sample
This is a simple application that uses TypeScript on both the server (Express) and client (React). The goal of this project was simply a learning experience, and to realize the huge benefits of having a type safe environment shared by both the client and server.

##Getting started
Clone the repo:

`git clone git@github.com:brooklynDev/typescript-react-crud-sample.git`

Then, cd into that directory and install the necessary dependencies:

`npm install`

Once that's done, create a MySQL database with any name of your choosing. Then, create a file in the root of the project called `.env` and place the following keys in the file. Change the values to match your configuration:

```
DB_HOST=localhost
DB_PORT=3306
DB_NAME={some_db_name}
DB_USER={username}
DB_PASSWORD={password}
```

Once that's done, we'll use `knex` to build the database for us:

`npm run migrate`

From there, you're ready to run the application:

`npm start`

Point your browser to [http://localhost:3000](http://localhost:3000) and experience the awesomeness of the ugliest CRUD app you've ever seen.