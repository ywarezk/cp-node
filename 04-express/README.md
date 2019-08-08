## EX

- You neex to start a new express project with **express-generator**
- You need to connect the project to sequelize and to sqlite using **sequelize-cli**
- create a file for your database (db.sqlite), and in the config.json define how to connect to that database (windows users might choose not to do it via environment variables)
-  create a model **Task** and migration for that file
- Create an **express.Router** for REST api for the task table
- the rest api should support CRUD on the tasks table
- Your server should support the following API's:
    - GET /api/tasks/ - will return all the tasks
    - POST /api/tasks/ - with body: {title: '...', description: '...'} will create a new task in the table
    - PUT /api/tasks/:id/ - with body: {title: '...', description: '...'}  will update the fields
    - DELETE /api/tasks/:id/ - will delete the task with this pk