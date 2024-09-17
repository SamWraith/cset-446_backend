import { Task } from "../models/task.model.js";


const createTask = async (req, res) => {
    const { taskName, taskDescription } = req.body;
    if(!taskName || !taskDescription) {
        return res.status(400).json({ error: "Please provide both taskName and taskDescription" });
    }

    try {
        const task = await Task.create({ taskName, taskDescription });
        if(!task){
            return res.status(500).json({ error: "Failed to create task" });
        }
        res.status(201).json({ message: "Task created successfully", data: task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        if(!tasks){
            return res.status(404).json({ error: "No tasks found" });
        }
        res.status(200).json({ data: tasks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { 
    createTask,
    getTasks,
 };