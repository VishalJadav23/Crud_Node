const express = require("express")
const userController = require("./UserController")

const UserRouter = express.Router()

UserRouter.post("/newuser", userController.CreateUser)

UserRouter.get("/:id", userController.ShowUser)

UserRouter.delete("/rmuser/:id", userController.RemoveUser)

UserRouter.get("/upuser/:id", userController.GetUserById)

UserRouter.put("/update/user/:id", userController.UpdateUser)

module.exports = UserRouter