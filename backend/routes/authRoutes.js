const express = require('express')
const router = express.Router()

const {controllers} = require('../controllers/auth/authControllers')

router.post('/login', controllers.postLogin)
router.post('/register', controllers.postRegister)

module.exports = router