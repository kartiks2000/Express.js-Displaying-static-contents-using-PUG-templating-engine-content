
const express = require('express');
const path = require('path');

const router = express.Router();

const backprops = require('./back');


router.use('/products',(req,res,next)=>{
    // console.log(backprops.allproducts);

    // We render .pug file using "res.render()" and we eneter the name of pug file inside it without ".pug" extention
    res.render('products');
});

router.use("/addproduct",(req,res,next)=>{
    // We render .pug file using "res.render()" and we eneter the name of pug file inside it without ".pug" extention
    res.render('addproduct');
});

module.exports = {
    "router": router,
}