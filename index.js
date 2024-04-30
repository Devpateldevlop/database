const express = require('express');
const env = require('dotenv').config();
const app = express();
const dbConnection = require('./db');
const UserData = require("./schema");
const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/allData',(req,res)=>{
    UserData.find().then((item)=>{
        res.status(200).json(item);
    })

})
app.post('/allData',async (req,res)=>{
    const alluser = req.body;
    const user = await UserData.create(alluser);
    res.json({"data":user})
})

app.put('/allData',async (req,res)=>{
    const {Email,Password,LastName,FirstName,Contact} = req.body;
    const payload = {
        Email,
        Password,
        LastName,
        FirstName,
        Contact
    }

    const user = await UserData.find({Email});
    console.log(user);
    const update =await UserData.findByIdAndUpdate({_id:user._id},payload);
    res.send("successfull"+update);
   
})

app.delete('/allData',async (req,res)=>{
    const {Email} = req.body;

    const user = await UserData.find({Email});
    UserData.findByIdAndDelete({_id:user._id}).then(function(item){
      return  res.status(201).json({"Delete Successfully":true})
    })
    res.send("oops")
})
dbConnection().then(()=>{
    app.listen(port,function(){
        console.log("listening on port "+ port);
    });  
}).catch((err)=>{
    console.log("Listening Failed : "+err.message);
})     