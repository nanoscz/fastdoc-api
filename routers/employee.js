'use strict'

const { EmployeeController } = require('../controllers')

const express = require('express')
const router = express.Router()
const employeeController = new EmployeeController()

router
  .route('/')
  .get(employeeController.findAll)
  .post(employeeController.create)

router
  .route('/:id')
  .get(employeeController.findOne)
  .patch(employeeController.update)
  .delete(employeeController.delete)

module.exports = {
  employeeChildRouter: router
}
