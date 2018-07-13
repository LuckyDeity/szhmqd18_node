const express = require("express")
const path = require('path')

const studentManagerRouter = express.Router();

const studentManagerController = require(path.join(__dirname,"../controllers/studentManagerController.js"))

studentManagerRouter.get('/list',studentManagerController.getStudentListPage)

module.exports = studentManagerRouter
