import { app } from './app.js';
import connectDB from './db/connect.js';

// dotenv.config({
//     path: "./.env"
// });
// const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello World!!!</h1>");
});







// ! Connect to DB and start server
connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})





// app.listen(process.env.PORT || 3000, () => {
//         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     })