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
connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
