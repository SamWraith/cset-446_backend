import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';

dotenv.config({
    path: "./.env"
});
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Hello World!!!</h1>");
});


// ! Import routes
import taskRouter from './routes/task.routes.js';
import userRouter from './routes/user.routes.js';

app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/users", userRouter);

export {app};