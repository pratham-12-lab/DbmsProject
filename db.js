const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://gaikwadpratham26:Prathaml12@cluster1.edf5xnp.mongodb.net/rentride-udemy' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose