const mongoose = require('mongoose')

const assignmentModel = new mongoose.Schema({

    name:{type:String, required:true},
    creator:{type:String, required:true},
    type:{type:String, required:true},
    date:{type:Date, required:true},
    time:{type:String, required:true},
    link:{type:String, required:true},
    password : {type:String, required:false}

},{
    versionKey:false,
    //timestamps:true,
})


module.exports = mongoose.model('Assignment', assignmentModel)