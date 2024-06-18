const express = require('express')

const cors = require('cors')

const logic = require('./services/logics')

const taskServer = express()

taskServer.use(cors({
    origin:'http://localhost:3000'
}))

taskServer.use(express.json())

taskServer.listen(8000,()=>{
    console.log('Task Server Listening on port 8000');
})

taskServer.get('/get-all-tasks',(req,res)=>{
    logic.getAllTasks().then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

taskServer.post('/add-an-task',(req,res)=>{
    logic.addTask(req.body.id,req.body.name,req.body.task).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

taskServer.delete('/delete-an-task/:id',(req,res)=>{
    logic.deleteTask(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

taskServer.get('/view-an-task/:id',(req,res)=>{
    logic.viewTask(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

taskServer.post('/update-an-task/:id',(req,res)=>{
    logic.updateTask(req.params.id,req.body.name,req.body.task).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})
