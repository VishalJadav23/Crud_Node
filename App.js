const express = require("express")
const Connect = require("./MongoConect")
const UserRouter = require("./User/UserRouter")
Connect()

const App = express()

App.use(express.json())


App.get("/", (req, res) => {
    return res.status(200).send({ message: "Success" })
})

App.use("/user", UserRouter)

App.use("/view", express.static('views'))

App.listen(5000, () => {
    console.log("server started");
    console.log("http://localhost:5000");
})


