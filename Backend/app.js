const express = require("express");
const app = express();
app.get("/",(req,res)=>[
    res.send("hellow everyone")
])

module.exports = app