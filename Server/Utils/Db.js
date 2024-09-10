const mongoose = require("mongoose");

const URI = process.env.MONGODB_URL;

const conDB = async () => {
    try {
       await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
        console.log("the db is connected successfully with the backend.")
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports=conDB;