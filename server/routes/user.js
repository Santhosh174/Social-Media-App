const express = require('express')
const controller = require('../controllers/userController')
const { verifyToken } = require('../middleware/authMiddle')

const router = express.Router()

// read //
router.get('/:id',verifyToken,controller.getUser)
router.get('/:id/friends',verifyToken,controller.getUserFriends)

// update //
router.patch('/:id/:friendId',verifyToken,controller.addRemoveFriend)

export default router;