const express = require('express')



const Assignment = require('../models/assignments.model')

const router = express.Router()


router.post("",async(req,res) => {
    try {
        
        const user = await Assignment.create(req.body)

        return res.send(user)


    } catch (error) {
        return res.send(error.message)
    }
})

router.get("",async(req,res) => {
    try {
      
        const  user = await Assignment.find().lean().exec()
        return res.send(user)

    } catch (error) {
        return res.send(error.message)
    }
})



module.exports = router