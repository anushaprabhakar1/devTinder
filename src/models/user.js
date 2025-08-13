const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 50

    },
    lastName : {
        type : String,
    },
    emailId : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        tim : true
    },
    password : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        min : 18,
        max : 60
    },
    gender : {
        type : String,
        validate(value){
            if(!["male", "female", "other"].includes(value)){
                throw new Error("Gender data is invalid!");
            }
        }
    },
    photoUrl : {
        type : String,
        default : "https://www.workitdaily.com/media-library/woman-on-laptop-optimizing-her-linkedin-profile.jpg?id=27579583&width=1200&height=800&quality=85&coordinates=0%2C0%2C0%2C0"
    },
    about : {
        type : String,
        default : "I'm a Developer :)"
    },
    skills : {
        type : Array,
    }
},
{timestamps : true}
)

module.exports = mongoose.model("User", userSchema);