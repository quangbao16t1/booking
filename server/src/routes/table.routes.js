import express from "express";
import TableController from "../controllers/table.controller.js";

const tableRouter = express.Router();

tableRouter.get('/', TableController.getAllTables);
tableRouter.get('/:id', TableController.getTableById);
tableRouter.put('/:id', TableController.updateTable);
tableRouter.delete('/:id', TableController.deleteTable);
tableRouter.post('/', TableController.createTable);


export default tableRouter;