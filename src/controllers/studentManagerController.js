const xtpl = require("xtpl");
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "szhmqd18";

exports.getStudentListPage = (req, res) => {
    const keyword = req.query.keyword || ''
  MongoClient.connect(
    url,
    {useNewUrlParser:true},
    function(err, client) {
      const db = client.db(dbName);

      const collection = db.collection("studentInfo");
      // Find some documents
      collection.find({ name: {$regex:keyword} }).toArray(function(err, docs) {
          client.close();

          xtpl.renderFile(
            path.join(__dirname, "../views/list.html"),{studentList:docs,keyword},(err, content) => {
              res.send(content);
            }
          );

      });
    }
  );
};
