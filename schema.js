const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserShcema = new Schema({
    "FirstName": {
      
        type: String, 
    },
    "LastName":{
        type: String,
    },
    "Email": {
        required:[true,"please enter a valid email address"],
        type: String,
        unique: true
    },
    "Contact":{
        type: String
    },
    "Password": {
   
        type: String,
    }
}, { timestamps: true });
module.exports = mongoose.model("UserData", UserShcema);
