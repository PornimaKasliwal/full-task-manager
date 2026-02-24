// require("dotenv").config
// const express = require("express")
// const mongoose = require("mongoose")

// const app = express()
// mongoose.connect(process.env.MONGO_URL)

// app.use("/", (req,res)=>{
//     res.status(200).json({message:"TASK MANAGER API RUNNING.."})
// })
//  mongoose.connection.once("open", ()=>{
//     console.log("Db connected")
//     app.listen(process.env.PORT, ()=>{
//         console.log("SERVER RUNNING")
//         console.log(`mode:${process.env.NODE_ENV}`);
        
//       })
    
//  })

require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose.connect(process.env.MONGO_URL)

app.get("/", (req, res) => {
    res.status(200).json({ message: "TASK MANAGER API RUNNING.." })
})

mongoose.connection.once("open", () => {
    console.log("Db connected")

    app.listen(process.env.PORT, () => {
        console.log("SERVER RUNNING")
        console.log(`mode: ${process.env.NODE_ENV}`)
    })
})
module.exports = app