const moongoose=require('mongoose')
const { STRING} = require('./schemaTypes')

const userSchema=moongoose.Schema({
    name:STRING,
})

let userData=moongoose.model("userData",userSchema);
module.exports=userData