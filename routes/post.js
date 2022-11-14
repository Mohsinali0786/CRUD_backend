const express = require('express')
const routes = express.Router()
const { addUser, updateUser } = require('../controllers/postController')

routes.post('/adduser', addUser)
routes.post('/update-user/:id', updateUser)

module.exports = routes