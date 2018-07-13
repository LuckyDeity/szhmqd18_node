const xtpl = require('xtpl')
const path = require('path')

exports.getStudentListPage = (req,res) => {
    res.sendFile(path.join(__dirname, "../views/list.html"));
}