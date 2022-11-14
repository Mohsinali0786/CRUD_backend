const express=require('express')
const routes=express.Router()
const {getUser}=require('../controllers/getController')
routes.get('/getuser',getUser)


module.exports = routes