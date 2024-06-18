const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Task')

const tasks = mongoose.model('tasks',{
    id:String,
    name:String,
    task:String
})

module.exports={
    tasks
}