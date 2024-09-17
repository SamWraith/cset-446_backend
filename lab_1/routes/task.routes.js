import { Router } from "express";
import { createTask, getTasks } from "../controllers/task.controller.js";


const router = Router();

router.route("/create").post(createTask);
router.route("/").get(getTasks);



export default router;