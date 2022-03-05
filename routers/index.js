'use strict'

const { employeeChildRouter } = require('./employee')
const { clientChildRouter } = require('./client')
const { roleChildRouter } = require('./role')
const { motorcycleChildRouter } = require('./motorcycle')
const { motorcyclistChildRouter } = require('./motorcyclist')
const { userChildRouter, loginController } = require('./user')
const { coordChildRouter } = require('./coord')
const { shippingDetailChildRouter } = require('./shippingDetail')
const { shippingDocumentChildRouter } = require('./shippingDocument')

const express = require('express')
const router = express.Router()

router.post('/login', loginController)

router.use('/employee', employeeChildRouter)
router.use('/client', clientChildRouter)
router.use('/role', roleChildRouter)
router.use('/motorcycle', motorcycleChildRouter)
router.use('/motorcyclist', motorcyclistChildRouter)
router.use('/user', userChildRouter)

router.use('/coord', coordChildRouter)
router.use('/shipping/detail', shippingDetailChildRouter)
router.use('/shipping/document', shippingDocumentChildRouter)

module.exports = router
