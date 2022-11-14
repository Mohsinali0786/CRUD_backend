// const { usermodel } = require('../models')
const User = require('../models/usermodel')

const addUser = async (req, res) => {
    const { name, email } = req.body
    try {
        const UserExist = await User.findOne({name})
        if (UserExist) {
            res.send({ status: 'error', message: 'User Already Exist' })
        }
        else {
            await User.create({
                name,
            }).then(() => {
                res.send({ status: 'success', message: 'Congratulations Member added successfully' })
            }).catch((err) => {
                console.log('err', err)

            })
        }

    }
    catch (err) {
        console.log('err', err)
    }
}
const updateUser = async (req, res) => {
    try {
        const { name, email, id } = req?.body
        console.log(!name,!email)
  
            User.findByIdAndUpdate(req.params.id, { name, email }, function (err, data) {
              if (err) {
                  return res.send({ success: false, err })
              }
              return res.send({ success: true, data })
          })

    }
    catch (err) {
        console.log('err', err)
        return res.send({ success: false, message: 'Oops! something went wrong!', err })
    }
}
module.exports = {
    addUser,
    updateUser,
}