const path = require("path");
const captchapng = require("captchapng");
const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "szhmqd18";

exports.getLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
};

exports.getImageVcode = (req, res) => {
  const rendom = parseInt(Math.random() * 9000 + 1000);
  var p = new captchapng(80, 30, rendom); // width,height,numeric captcha
  p.color(0, 0, 0, 0); // First color: background (red, green, blue, alpha)
  p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)

  var img = p.getBase64();
  var imgbase64 = new Buffer(img, "base64");
  res.writeHead(200, {
    "Content-Type": "image/png"
  });
  res.end(imgbase64);
};

exports.getRegisterPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"));
};

exports.register = (req, res) => {
  const result = { status: 0, message: "注册成功" };
  const { username } = req.body;

  MongoClient.connect(url, {useNewUrlParser: true},function(err, client) {
    const db = client.db(dbName);

    //获取集合，进行操作
    const collection = db.collection('accountInfo');

    //先根据用户名，查询该用户是否存在
    collection.findOne({username},(err,doc)=>{
      if(doc != null){//存在
        result.status = 1
        result.message = "用户名已经存在!"

        client.close();
        res.json(result)
      }else{//不存在
        // req.body = {username:'admin',password:'123'}
        collection.insertOne(req.body,(err,result1)=>{

          // 判断插入结果是否失败，如果失败就是null
          if(result1 == null){
            result.status = 2
            result.message = "注册失败!"
          }

          client.close();
          res.json(result)
        })
      }
    })
  });
};
