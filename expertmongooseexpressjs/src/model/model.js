const mongoose = require("mongoose");
const playlist = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },

    password:{
        type:String,
        require:true,
    },

    cpassword:{
        type:String,
        require:true,
    },
});

const playlistschema = new mongoose.model("dangelfilm",playlist);
module.exports = playlistschema;