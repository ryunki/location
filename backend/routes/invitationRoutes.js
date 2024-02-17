const express = require('express')
const router = express.Router()

const {controllers} = require('../controllers/friendInvitation/friendInvitationControllers')

const verifyAuthToken = require('../middleware/verifyAuthToken')

router.use(verifyAuthToken)

router.post('/invite', controllers.postInvite)
router.post('/accept', controllers.postAccept)
router.delete('/reject', controllers.postReject)

module.exports = router

