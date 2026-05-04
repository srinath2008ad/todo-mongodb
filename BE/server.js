const express = require("express")
const app = express()
const mongoose = require('mongoose');
const todos = require("./models/todo");
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://shiva7_db:shiva1377@ac-eayqnpd-shard-00-00.vsseipx.mongodb.net:27017,ac-eayqnpd-shard-00-01.vsseipx.mongodb.net:27017,ac-eayqnpd-shard-00-02.vsseipx.mongodb.net:27017/?ssl=true&replicaSet=atlas-fphsgm-shard-0&authSource=admin&appName=Shiva7").then(() => {console.log("mongodb connected")})
.catch((err) => {console.log(err)})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.post("/addtodos",(req,res)=>{
    console.log(req.body)

    const newtodo = todos(req.body);
    newtodo.save()
    res.send({"msg":"todos added"})
})

app.get("/gettodos",async(req,res)=>{
    var todo = await todos.find()
    res.json(todo)
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})