const User = require('../models/usermodel')

const deleteUser = async (req, res) => {
    const {id}=req.params
    console.log('id',id)

    try {
         User.findByIdAndDelete(id,function(err,data){
            if (err) {
                return res.send({ success: false, err })
            }
            return res.send({ success: true, data })
        })
    }
    catch (err) {
        console.log('err', err)
    }
}
module.exports = {
    deleteUser,
}