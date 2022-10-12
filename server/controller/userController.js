const User = require('../models/userModel')

const createuser = async (req, res) => {

    const reqData = req.body;
    const saveData = await User.create(reqData)
    return res.send({ msg: "user crated", data: saveData });
};



const findAll = async (req, res) => {
    const getuser = await User.find()
    return res.send({ msg: "get all data ", data: getuser })

};


const findOne = async (req, res) => {
    const id = req.params.id
    const user = await User.findById({ _id: id })
    const finalUser = await User.find(user)
    return res.send(finalUser)

};


const update = async (req, res) => {
    const userData = req.body
    console.log(userData);
    const id = req.params.id;
    const user = await User.findById({ _id: id })
    const finalupdate = await User.updateOne(userData)

    return res.send({ msg: "user updated", finalupdate })

};

const deleteUser = async (req, res) => {

    const user = req.params.id
    const deleteuser = await User.findByIdAndDelete({ _id: user })
    return res.send({ msg: "user deleted" })
};


module.exports.createuser = createuser
module.exports.findAll = findAll
module.exports.update = update
module.exports.deleteUser = deleteUser
module.exports.findOne = findOne