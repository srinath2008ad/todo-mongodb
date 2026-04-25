const mongoose = require("mongoose")

//schema which decides how should data store in db
const todosSchema = new mongoose.Schema({
    todos:String,
    status:Boolean
})


//exporting schema to use it in server.js
module.exports = mongoose.model("Todo",todosSchema)