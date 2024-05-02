const express = require('express');
const CategoryData=require('../schema1')
const Routers = express.Router();

Routers.route('/Category').get(async (req,res)=>{

    try {
        const allCategory = await CategoryData.find();
        res.status(200).json(allCategory);
    } catch (err) {
        res.status(500).json(err);
    }
})
Routers.route('/Category').post(async (req,res)=>{

    const alluser = req.body;
    const user = await CategoryData.create(alluser);
    res.json({"data":user})
})
Routers.route('/Category').delete(async (req,res)=>{

    const {Category} = req.body;
    const UserDataOld = await CategoryData.findOne({ Category });
    try {
        CategoryData.deleteOne({ _id: UserDataOld._id }).then(odata => {
            res.send("Delete Successfully");
        })
    } catch (err) {
        return res.send(err);
    }
})

module.exports={Routers}