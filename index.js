require('dotenv').config()
const express=require('express');
const app=express();
const port=4000;

app.get("/",(req,res)=>{
    res.send("Hellow world");
})


app.listen(process.env.PORT,()=>{
    console.log(`App Listen on Port ${port}`);
})