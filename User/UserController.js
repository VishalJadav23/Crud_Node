const userModel = require("./UserModel");

class UserController {

    // For New User
    async CreateUser(req, res) {
        try {
            const user = await userModel.create(req.body)
            if (user) return res.status(200).send({ message: "Success", user })
            return res.status(400).send({ message: "Something Went Wrong" })
        } catch (error) {
            if (error && error.code === 11000) return res.status(400).send({ message: "Email Is Allready Exists" })
            return res.status(500).send({ message: "Internal Server Error" })
        }
    }

    // Find User
    async ShowUser(req, res) {
        try {
            const user = await userModel.find({})
            if (user) return res.status(200).send({ message: "Success", user })
            return res.status(400).send({ message: "Somthing Went Wrong" })
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error" })
        }
    }

    // For Remove User
    async RemoveUser(req, res) {
        try {
            const result = await userModel.deleteOne({ _id: req.params.id })
            if (result) return res.status(200).send({ message: "Success" })
            return res.status(400).send({ message: 'Somthing Went Wrong' })
        } catch (error) {
            return res.status(400).send({ message: 'Internal Server Error' })
        }
    }

    //For Update User
    async UpdateUser(req, res) {
        try {
            const id = req.params.id
            const body = req.body
            const result = await userModel.updateOne({_id:id}, body)
            if(result.modifiedCount > 0 || result.matchedCount > 0){
                return res.status(200).send({message:"Success"})
            }

            return res.status(400).send({message:"Somthing Went Wrong"})
        } catch (error) {
            return res.status(500).send({message:"Intrenal Server Error"})
        }
    }

    // Find By ID
    async GetUserById(req, res) {
        try {
            const { id } = req.params
            const result = await userModel.findById(id)
            if (result) return res.status(200).send({ message: "Success", user: result })
            return res.status(400).send({ message: "Somthing Went Wrong" })
        } catch (error) {
            return res.status(400).send({ message: "Internal Server Error" })
        }
    }
}

const userController = new UserController()
module.exports = userController