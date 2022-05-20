import db from '../configs/db.config.js';

const TableModel = (table) => {
    this.id = table.id;
    this.code = table.code;
    this.status = table.status;
    this.capacity = table.capacity;
}

TableModel.createTable = (table, result) => {
    const sql = `INSERT INTO tables SET 
        code = '${table.code}', 
        status = '${table.status}' ,
        capacity = '${table.capacity}'`;
    db.query(sql, (err, data) => {
        if (err) throw err;
        result(data);
    })
}

TableModel.getAllTables = (result) => {
    const sql = `SELECT * from tables`;
    db.query(sql, (err, data) => {
        if (err) throw err;
        result(data);
    })
}

TableModel.getTableById = (id, result) => {
    const sql = `SELECT * from tables WHERE id = ${id}`;
    db.query(sql, (err, data) => {
        if (err) throw err;
        result(data);
    });
}

TableModel.updateTable = (id, table, result) => {
    db.query(
        `UPDATE tables SET 
        code = '${table.code}', 
        status = '${table.status}' ,
        capacity = '${table.capacity}'
        WHERE id = ${id}`,
        (err, data) => {
            if (err) throw err;
            result(data);
        }
    )
}

TableModel.deleteTable = (id, result) => {
    const sql = `DELETE FROM tables WHERE id = ${id}`;
    db.query(sql, (err, data) => {
        if (err) throw err;
        result(data);
    })
}

export default TableModel;