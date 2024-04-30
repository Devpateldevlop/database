const mongoose = require('mongoose');

const DbConnection = async ()=>{
    try{
        const dbConnection = await mongoose.connect("mongodb+srv://dev:Ssaa123@cluster0.pf0qwiv.mongodb.net/Expense?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`Database connection successful ${dbConnection.connection.host}`)
    }
    catch(e){
        console.log(`Database connection failed: ${e.message}`);
    }
}
module.exports = DbConnection;