const express = require('express')

const connect = require('./configs/db')

const app = express()
app.use(express.json())

const assignmentController = require('./controller/assignments.controller')
const lectureController = require('./controller/lecture.controller')

app.use('/assignment', assignmentController)
app.use('/lecture', lectureController)




const port = 8080


app.listen(port,async()=>{
    try{
        await connect()
        console.log("listening on", port)
    }
    catch(err){
        console.log(err.message)
    }
})