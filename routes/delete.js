const express=require('express')
const routes=express.Router()
const {deleteUser}=require('../controllers/deleteController')
routes.delete('/deleteuser/:id',deleteUser)

module.exports = routes