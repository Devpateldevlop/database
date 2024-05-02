const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserShcema = new Schema({
 
    "Category":String
   
}, { timestamps: true });
module.exports = mongoose.model("CategoryData", UserShcema);
