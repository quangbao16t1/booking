import TableModel from "../models/table.model.js";

const TableController = {};

TableController.createTable = async (req, res) => {
    try {
        const table = {
            code: req.body.code,
            status: req.body.status,
            capacity: req.body.capacity
        }
        await TableModel.createTable(table, data => {
            res.status(201).json({
                success: true,
                table: data,
            });
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

TableController.getAllTables = async (req, res) => {
    await TableModel.getAllTables((data) => {
        res.status(200).json({
            success: true,
            result: data,
        })
    });
    // res.send({result: data});
}

TableController.getTableById = async (req, res) => {
    try {
        const id = req.params.id;
        await TableModel.getTableById(id, data => {
            res.status(200).json({
                result: data,
            })
        });
    } catch (error) {
        res.status(404).json({
            error: error.message,
        })
    }
}

TableController.updateTable = async (req, res) => {
    try {
        const id = req.params.id;
        const table = {
            code: req.body.code,
            status: req.body.status,
            capacity: req.body.capacity
        }
        await TableModel.updateTable(id, table, data => {
            console.log(`1 row is updated!!!`);
            res.status(200).json({
                result: data,
            })
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

TableController.deleteTable = async (req, res) => {
    try {
        const id = req.params.id;
        await TableModel.deleteTable(id, data => {
            res.status(200).json({
                success: true,
                result: data,
            })
        });
    } catch (error) {
        res.status(404).json({
            error: error.message,
        })
    }
}


export default TableController;