'use strict'

const { RoleController } = require('../controllers')

const express = require('express')
const router = express.Router()
const roleController = new RoleController()

router
  .route('/')
  .get(roleController.findAll)
  .post(roleController.create)

router
  .route('/:id')
  .get(roleController.findOne)
  .patch(roleController.update)
  .delete(roleController.delete)

module.exports = {
  roleChildRouter: router
}
