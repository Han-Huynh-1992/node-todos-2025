let toDos = require('../models/toDoModel');

async function getToDos(res) {
    try {
        let records = await toDos.find();
        res.json(records);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = function (app) {
    app.get('/api/todos', (req, res) => {
        getToDos(res);
    });

    app.get('/api/todo/:id', async (req, res) => {
        const id = req.params.id;
        try {
            let todo = await toDos.findById(id);
            res.json(todo);
        } catch (err) {
            res.status(500).json(err);
        }
    });

    app.post('/api/todo', async (req, res) => {
        let newToDo = {
            text: req.body.text,
            isDone: req.body.isDone
        };

        try {
            await toDos.create(newToDo);
            getToDos(res);
        } catch (err) {
            res.status(500).json(err);
        }
    });

    app.put('/api/todo', async (req, res) => {
        if (!req.body._id) res.status(500).send("ID is required");

        let todo = {
            text: req.body.text,
            isDone: req.body.isDone
        };

        try {
            await toDos.updateOne({ _id: req.body._id }, todo);
            getToDos(res);
        } catch (err) {
            res.status(500).json(err);
        }
    });

    app.delete('/api/todo/:id', async (req, res) => {
        if (!req.params.id) res.status(500).send("ID is required");

        try {
            await toDos.deleteOne({ _id: req.params.id });
            getToDos(res);
        } catch (err) {
            res.status(500).json(err);
        }
    });
};