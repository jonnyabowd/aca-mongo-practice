const users = require('../data')
const UsersModel = require('../mongo/model')

const listUsers = (req, res) => {
    UsersModel.find({})
        .then(result => res.json(result))
        .catch(() => res.sendStatus(500))
}

const showUser = (req, res) => {
    UsersModel.findById({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(() => res.sendStatus(500))    
}

const createUser = (req, res) => {
    UsersModel.create(req.body)
        .then(result => res.json(result))
        .catch(() => res.sendStatus(500))
}

const updateUser = (req, res) => {
    UsersModel.updateOne({ _id: req.params.id }, req.body)
        .then(result => res.json(result))
        .catch(() => res.sendStatus(500))
}

const deleteUser = (req, res) => {
    UsersModel.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(() => res.sendStatus(500))
}

module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
}
