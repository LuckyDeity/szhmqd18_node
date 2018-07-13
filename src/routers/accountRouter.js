//导入express
const express = require('express');
const path = require('path')

//创建路由对象
const accountRouter = express.Router();

const accountController = require(path.join(__dirname,'../controllers/accountController.js'));

accountRouter.get('/login',accountController.getLoginPage)

accountRouter.get('/vcode',accountController.getImageVcode)

accountRouter.get('/register',accountController.getRegisterPage)

accountRouter.post('/register',accountController.register)

accountRouter.post('/registerVerify',accountController.registerVerify)

//导出路由模块(中间件)
module.exports = accountRouter;