const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config();
const todos = require("./models/todos")
const bodyParser = require('body-parser');

const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

//connect to the mongodb database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("mongodb connected")})
.catch((err)=>{console.log("error",err)})

app.get("/",(req,res)=>{
    res.send("api running")
})

app.post("/addtodos",(req,res)=>{
    const todo = new todos(req.body);
    todo.save();
    res.send({"msg":"todo added"})
})

app.get("/gettodos",async (req,res)=>{
    //using await because it needs time to complete its fetch
    //using await we can get full data beacuse next line(33) wont execute until completion of find()
    const alltodos = await todos.find();
    res.send(alltodos)
})

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})