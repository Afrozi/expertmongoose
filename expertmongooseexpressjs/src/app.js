const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
require('./db/connect');
const playlistschema = require('./model/model');
const staticpath = path.join(__dirname,"../template/views");
app.set("views",staticpath);
app.set("view engine","hbs");
app.use(express.urlencoded({extended:false}));
app.post("/empdate",async (req,res)=>{
   try {
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    if (password === cpassword) {
        const postdata = new playlistschema({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            cpassword:req.body.cpassword,
        });
        const getdata = await postdata.save();
         res.render("login");
    }else{
        res.send("password are not matching.....");
    }
   } catch (error) {
      res.send(error);
   }
});

app.post("/loginpage", async (req,res)=>{
   try {
    const email = req.body.email;
    const password = req.body.loginpassword;
    const getemail = await playlistschema.findOne({email:email});
    if (getemail.password === password) {
        res.render("sign");
    }else{
        res.send("please you do registration");
    }
   } catch (error) {
      res.send(err)
   }
})

app.get("/",(req,res)=>{
    res.render("sign");
});
app.get("/login",(req,res)=>{
    res.render("login");
});

app.listen(port,(err)=>{
    console.log('connected');
});