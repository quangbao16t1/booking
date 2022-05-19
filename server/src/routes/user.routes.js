import express from "express";
import UserController from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get('/search', UserController.searchUser);
userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getUserById);
userRouter.put('/:id', UserController.updateUser);
userRouter.delete('/:id', UserController.deleteUser);
userRouter.post('/', UserController.createUser);


export default userRouter;