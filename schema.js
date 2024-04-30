const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserShcema = new Schema({
    "Date": {
        required:[true,"please enter a valid email address"],
        unique:true,
        type: String, 
    },
    "Month_Name":{
        type: String,
    },
    "src": {
       
        type: String,
        
    },
    "Category":[{ type: String }]
   
}, { timestamps: true });
module.exports = mongoose.model("UserData", UserShcema);
