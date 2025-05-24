let toDos = require('../models/toDoModel');

module.exports = (app) => {
    app.get('/api/setupTodos', (req, res) => {
        let todoList = [
            {
                text: "Learn Node.js",
                isDone: false
            },
            {
                text: "Learn MOngoDB",
                isDone: false
            },
            {
                text: "Learn Docker",
                isDone: false
            }
        ];

        toDos.create(todoList);
    });
}