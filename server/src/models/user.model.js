import db from '../configs/db.config.js';

const UserModel = (user) => {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
    this.address = user.address;
    this.roleId = user.roleId;
}

UserModel.createUser = (user, result) => {
    const sql = `INSERT INTO users SET 
        name = '${user.name}', 
        email = '${user.email}' ,
        phoneNumber = '${user.phoneNumber}',
        address = '${user.address}',
        roleId = '${user.roleId}'`;
    db.query(sql, (err, data) => {
        if(err) throw err;
        result(data);
    })
}

UserModel.getAllUsers = (result) => {
    const sql = `SELECT * from users`;
    db.query(sql, (err, data) => {
        if (err) throw err;
        result(data);
    })
}

UserModel.getUserById = (id, result) => {
    const sql = `SELECT * from users WHERE id = ${id}`;
    db.query(sql, (err, data) => {
        if (err) throw err;
        result(data);
    });
}

UserModel.updateUser = (id, user, result) => {
    db.query(
        `UPDATE users SET 
        name = '${user.name}', 
        email = '${user.email}' ,
        phoneNumber = '${user.phoneNumber}',
        address = '${user.address}',
        roleId = '${user.roleId}'
        WHERE id = ${id}`,
        (err, data) => {
            if (err) throw err;
            result(data);
        }
    )
}

UserModel.deleteUser = (id, result) => {
    const sql = `DELETE FROM users WHERE id = ${id}`;
    db.query(sql, (err, data) => {
        if (err) throw err;
        result(data);
    })
}

UserModel.searchUser = (search, result) => {
    console.log(666);
    const sql = `SELECT * FROM users WHERE name LIKE '%${search}%'`;
    db.query(sql, (err, data) => {
        if(err) throw err;
         console.log(sql);
        result(data);
    });
}

export default UserModel;