const mongoose = require('mongoose');

const todosshema = mongoose.Schema({
    todos: String,
    status: Boolean
})

module.exports = mongoose.model("todo",todosshema)