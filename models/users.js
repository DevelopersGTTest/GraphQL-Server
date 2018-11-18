const db = require('../config/database')

let users = {}

users.getUsers = (data, callback)=>{
    if(db){
        let sql = `SELECT * FROM users`
        db.query(sql, data, (err, results)=>{
            if( err) throw err;
            callback(results)
        })        
    }
}