import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect.js';

dotenv.config({
    path: "./.env"
});
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello World!!!</h1>");
});

// ! Import routes

import taskRouter from './routes/task.routes.js';

app.use("api/v1/task", taskRouter);

export {app};