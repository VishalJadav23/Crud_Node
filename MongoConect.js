const { default: mongoose } = require("mongoose")

const Connect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/CRUD")
        console.log("DB connected to Mongo");
    } catch (error) {
        console.log( 'DB connection Loss');

    }
}

module.exports = Connect