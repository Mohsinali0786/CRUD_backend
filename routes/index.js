const express=require('express')
const routes=express.Router()

routes.use('/post',require('./post'))
routes.use('/get',require('./get'))
// routes.use('/update',require('./update'))
routes.use('/delete',require('./delete'))


module.exports=routes