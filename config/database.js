const mysql = require('mysql')

let params = {
    host     : 'localhost',
    user     : 'mroot',
    password : '',
    database : 'kinal'
}

let conn = mysql.createConnection(params)

module.exports = conn