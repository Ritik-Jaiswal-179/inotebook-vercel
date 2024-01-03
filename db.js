const mongoose = require("mongoose")

// const mongooseUrl = "mongodb://127.0.0.1:27017/inotebook"
const mongooseUrl = "mongodb+srv://ritikjaiswal17904:ritikjaiswal17904@cluster0.0gvplhb.mongodb.net/MERN-TODO"

const connectToMongo = ()=>{
    mongoose.connect(mongooseUrl, { useNewUrlParser: true })
}

module.exports = connectToMongo; 
