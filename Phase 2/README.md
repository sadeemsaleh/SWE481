# IMDB-movies
The repository is to host the code of a web application that browses and searches IMDB movies.

## Backend

### Running the backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Start the Play Framework server
   ```bash
   sbt run
   ```
3. Access the backend at: http://localhost:9000/   

### Formatting and linting
Before committing any backend changes, make sure to format the code:
    ```
    sbt scalafmtAll scalafmtSbt
    ```
### Connecting to database
You need to change the database user and password to connect to the database
   ```bash
   cd conf
   ```
Change the values of `db.default.username` and `db.default.password` in the `application.conf` file to your specs. 

### Updating database schema
Whenever the database schema changes, regenerate the JOOQ code: 
   ```bash
   sbt jooqCodegen
   ```
## Frontend

### Running the frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   ng serve
   ```
4. Access the backend at: http://localhost:4200/   

### Formatting and linting
Before committing any frontend changes, run:
   ```bash
   npm run format
   ng lint
   ```
