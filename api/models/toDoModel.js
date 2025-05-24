let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let todoSchema = new Schema({
    text: String,
    isDone: Boolean
});

let toDos = mongoose.model('toDos', todoSchema);

module.exports = toDos;