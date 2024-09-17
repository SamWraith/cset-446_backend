const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { default: connectDB } = require('./db/connect');
dotenv.config({
    path: "./.env"
});

app.get('/', (req, res) => {
    res.send("<h1>Hello World!!!</h1>");
});
connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});