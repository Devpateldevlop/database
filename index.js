const express = require('express');
const env = require('dotenv').config();
const app = express();
const cors=require('cors')
const dbConnection = require('./db');
const UserData = require("./schema");
const { Routers } = require('./router/category');
const port = process.env.PORT || 3000
app.use(express.json());
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }))
app.use(express.urlencoded({extended:true}))

app.use('/c',Routers)

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
    const { Date,Month_Name,src,Category } = req.body;
    const UserDataOld = await UserData.findOne({ Date });
    try {

        const payload = {
            Date,
            Month_Name,
            src,
            Category
        }
        UserData.updateOne({ _id: UserDataOld._id }, payload).then(odata => {
            res.send("Updated Successfully");
        })
    } catch (err) {
        return res.send(err);
    }

})

app.delete('/allData',async (req,res)=>{
    const {Date} = req.body;
    const UserDataOld = await UserData.findOne({ Date });
    try {
        UserData.deleteOne({ _id: UserDataOld._id }).then(odata => {
            res.send("Delete Successfully");
        })
    } catch (err) {
        return res.send(err);
    }
})
dbConnection().then(()=>{
    app.listen(port,function(){
        console.log("listening on port "+ port);
    });  
}).catch((err)=>{
    console.log("Listening Failed : "+err.message);
})     