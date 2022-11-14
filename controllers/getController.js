
const User = require('../models/usermodel')
const getUser = async (req, res) => {
    try {
        const AllItems = await User.find({})
        if (AllItems) {
            res.send({ status: 'success', AllItems })
        }
        else {
            res.send({
                message: "Error in data receiving"
            })
        }
    }
    catch (err) {
        console.log('err', err)
    }
}
module.exports = {
    getUser,
}