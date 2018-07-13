//导入express
const express = require("express");
const path = require("path")
const bodyParser = require('body-parser')
var session = require('express-session')

//创建app
const app = express();

app.use(express.static(path.join(__dirname,'statics')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(session({ secret: 'keyboard cat',resave:true,saveUninitialized:true, cookie: { maxAge: 60000 * 10 }}))

//集成路由中间件
const accountRouter = require(path.join(__dirname,"./routers/accountRouter.js"));
const studentManagerRouter = require(path.join(__dirname,"./routers/studentManagerRouter.js"))
app.use('/account',accountRouter)
app.use('/studentmanager',studentManagerRouter)
//开启
app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }
    console.log('ok')
})