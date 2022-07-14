const express = require('express')
require('dotenv').config()

const connect = require('./configs/db')

const app = express()
app.use(express.json())

const assignmentController = require('./controller/assignments.controller')
const lectureController = require('./controller/lecture.controller')
const user = require('./controller/user.controller')
const {register, login} = require('./controller/auth.controller')

app.use('/assignment', assignmentController)
app.use('/lecture', lectureController)


app.post('/register',register)
app.use('/findUser', user)
app.post('/login', login)





const port = process.env.PORT || 8080


app.listen(port,async()=>{
    try{
        await connect()
        console.log("listening on", port)
    }
    catch(err){
        console.log(err.message)
    }
})