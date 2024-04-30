const express = require('express');
const env = require('dotenv').config();
const app = express();
const dbConnection = require('./db');
const UserData = require("./schema");
const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/allData',(req,res)=>{
    res.json({"message":"welcome dev "})
})
app.post('/allData',async (req,res)=>{
    const alluser = req.body;
    const user = await UserData.create(alluser);
    res.json({"data":user})
})


dbConnection().then(()=>{
    app.listen(port,function(){
        console.log("listening on port "+ port);
    });  
}).catch((err)=>{
    console.log("Listening Failed : "+err.message);
})     