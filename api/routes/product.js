const express=require("express");
const product=require("../models/product");


const productRouter=express.Router();


//add product

productRouter.post("/add", async(req,res)=>{
    try {
        let newproduct=new product(req.body) ;
        let result=await newproduct.save() ;
        res.send({product:result, msg:"product is added"})
    } catch (error) {
        console.log(error)
    }
})

//get all products

productRouter.get("/", async(req,res)=>{
    try {
        let result=await product.find() ;
        res.send({products:result, msg:"all products are listed"})
    } catch (error) {
        console.log(error)
    }
})

//find product by id

productRouter.get("/:id", async(req,res)=>{
    try {
        let result=await product.findById(req.params.id) ;
        res.send({products:result, msg:"product found"})
    } catch (error) {
        console.log(error)
    }
})

//delete product

productRouter.delete("/:id", async(req,res)=>{
    try {
        let result=await product.findByIdAndDelete(req.params.id) ;
        res.send({msg:"product deleted"})
    } catch (error) {
        console.log(error)
    }
})

//edit product

productRouter.put("/:id", async(req,res)=>{
    try {
        let result=await product.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}}) ;
        res.send({msg:"product edited"})
    } catch (error) {
        console.log(error)
    }
})



module.exports=productRouter;