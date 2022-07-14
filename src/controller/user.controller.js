const express = require('express')
const router = express.Router()

const userSchema = require('../models/user.model')


router.get("",async(req,res) => {
    try {
      
        const user = await userSchema.find().lean().exec()
        return res.send(user)

    } catch (error) {
        return res.send(error.message)
    }
})


module.exports = router