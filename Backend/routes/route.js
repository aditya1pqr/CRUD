const express = require("express");
const {createUser, home, getUser}= require('../controllers/usercontroller')
const route = express.Router()
route.get("/",home)
route.post("/createuser", createUser)
route.get("/getUser" , getUser)
module.exports = route