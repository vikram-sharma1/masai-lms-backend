const mongoose = require('mongoose')


module.exports = () => {
    return mongoose.connect('mongodb+srv://masailms:masailms@cluster0.uzitmex.mongodb.net/?retryWrites=true&w=majority')
}