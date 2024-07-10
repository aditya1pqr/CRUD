const express = require("express");
const {createUser, home, getUser, updateUser}= require('../controllers/usercontroller')
const route = express.Router()
route.get("/",home)
route.post("/createuser", createUser)
route.get("/getUser" , getUser)
route.put("/updateUser/:id",updateUser)
module.exports = route