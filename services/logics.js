const db = require('../services/db')

//get all tasks
const getAllTasks = ()=>{
    return db.tasks.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                tasks:result
            }
        }
        else{
            return{
                statusCode:400,
                message: 'cant find employee'
            }
        }
    })
}

const addTask=(id,name,task)=>{
    return db.tasks.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"Task Already Exist"
            }
        }
        else{
            const newTask = new db.tasks({id,name,task})
            newTask.save()
            return{
                statusCode:200,
                message:"New Task Added Successfully"
            }
        }
    })
}

const deleteTask=(id)=>{
    return db.tasks.deleteOne({id}).then((result)=>{
        return{
            statusCode:200,
            message:"Task Deleted Successfully"
        }
    })
    .catch((error)=>{
        return{
            statusCode:401,
            message:"Couldn't find task"
        }
    })
}

const viewTask=(id)=>{
    return db.tasks.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                taskss:result
                
            }
        }
        else{
            return{
                statusCode:404,
                message:'cant find task'
            }
        }
    })
}

const updateTask=(id,name,task)=>{
    return db.tasks.findOne({id}).then((result)=>{
        if(result){
            result.id = id;
            result.name = name;
            result.task = task;

            result.save()

            return{
                statusCode:200,
                message:"Task Data Updated Successfully"
            }
        }
        else{
            return{
                statusCode:404,
                message:'cant find task'
            }
        }
    })
}

module.exports = {
    getAllTasks,
    addTask,
    deleteTask,
    viewTask,
    updateTask
}