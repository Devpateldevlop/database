const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserShcema = new Schema({
    "Date": {
        required:[true,"please enter a valid email address"],
        unique:true,
        type: Date, 
    },
    "Month_Name":{
        type: String,
    },
    "src": {
       
        type: String,
        
    },
    "Category":[{
        "cat":String,
        "value":Number
    }]
   
}, { timestamps: true });
module.exports = mongoose.model("UserData", UserShcema);
