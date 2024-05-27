const express = require("express");
const app = express();
const port = 5000;
const {sendMail} = require("./controller/sendMail");

app.get("/", (req,res)=>{
    res.send("i am the server");
});

app.get("/mail", sendMail);

const start= async()=> {
    try{
        app.listen(5000, ()=>{
            console.log(`i am live in port .no :  ${port}`);
        });

    }catch(error){}
}

start();