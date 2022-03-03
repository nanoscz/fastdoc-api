'use strict'

const { employeeChildRouter } = require('./employee')
const { clientChildRouter } = require('./client')
const { roleChildRouter } = require('./role')
const { motorcycleChildRouter } = require('./motorcycle')
const { motorcyclistChildRouter } = require('./motorcyclist')
const { userChildRouter, loginController } = require('./user')

const express = require('express')
const router = express.Router()

router.post('/login', loginController)

router.use('/employee', employeeChildRouter)
router.use('/client', clientChildRouter)
router.use('/role', roleChildRouter)
router.use('/motorcycle', motorcycleChildRouter)
router.use('/motorcyclist', motorcyclistChildRouter)
router.use('/user', userChildRouter)

module.exports = router
