import mongoose, { Schema } from "mongoose";


const takeSchema = new Schema({
    taskName: {
        type: String,
        required: [true, "Please provide a task name"],
    },
    taskDescription: {
        type: String,
        required: [true, "Please provide a task description"],
    }
});


export const Task = mongoose.model("Task", takeSchema);