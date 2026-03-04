import express from "express";

//Imports
import { createTask, getAllTasks } from "../controllers/task.controller.js";
import taskValidation from "../validators/task.validator.js";
import ValidatorHandler from "../middleware/validator.js";

// Router Setup
const TaskRouter = express.Router();

// Task Routes
TaskRouter.post("/create-task", taskValidation, ValidatorHandler, createTask);

TaskRouter.get("/get-all-tasks", getAllTasks);

// Export Router
export default TaskRouter;
