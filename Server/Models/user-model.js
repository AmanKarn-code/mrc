const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


// schema or structure
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{timestamps:true})



// jwt
userSchema.methods.generateToken=async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        },
        process.env.jwt_KEY,{
            expiresIn:"20d"
        }
    )
    } catch (error) {
        console.error(error);
        
    }
}

// model
const User = mongoose.model("User", userSchema);
module.exports = User;