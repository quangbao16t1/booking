import UserModel from "../models/user.model.js";
// import UserSerive from "../services/user.service.js";

const UserController = {};

UserController.createUser = async (req, res) => {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            roleId: req.body.roleId
        }
        await UserModel.createUser(user, data => {
            res.status(201).json({
                success: true,
                User: data,
            });
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

UserController.getAllUsers = async (req, res) => {
    await UserModel.getAllUsers((data) => {
        res.status(200).json({
            success: true,
            result: data,
        })
    });
    // res.send({result: data});
}

UserController.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await UserModel.getUserById(id, data => {
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

UserController.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            roleId: req.body.roleId
        }
        await UserModel.updateUser(id, user, data => {
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

UserController.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await UserModel.deleteUser(id, data => {
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

UserController.searchUser = async (req, res) => {
    try {
        const key = "thuong";
        console.log(key)
        await UserModel.searchUser(data => {
            res.status(200).json({
                result: data,
            })
        })
    } catch (error) {
        res.status(404).json({
            error: error.message,
        })
    }
}

export default UserController;