const path = require("path")

exports.getLoginPage = (req,res)=>{
    res.sendFile(path.join(__dirname,"../views/login.html"));
};