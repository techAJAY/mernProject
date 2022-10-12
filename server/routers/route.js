const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')


router.post('/createUser', userController.createuser)
router.get('/findUser', userController.findAll)
router.get('/findUser/:id', userController.findOne)
router.put('/update/:id', userController.update)
router.delete('/deleteUser/:id', userController.deleteUser)

module.exports = router