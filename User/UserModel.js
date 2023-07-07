const { default: mongoose } = require("mongoose");

class UserModel {

    constructor() {
        this.schema = new mongoose.Schema({
            fullName: { type: String, reqired: true },
            email: { type: String, reqired: true, unique: true },
            phone: { type: String, reqired: true, length: 10 },
            password: { type: String, reqired: true },
        }, { timestamps: true })
    }
}
const user = new UserModel()
const userModel = mongoose.model("Task_user", user.schema)
module.exports = userModel