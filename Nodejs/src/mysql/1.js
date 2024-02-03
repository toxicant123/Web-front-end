const mysql = require('mysql');

const db = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'test'
})

db.query('select 1 ', (err, results) => {
    if (err) {
        console.log(err.message)
        return
    }

    console.log(results)
})


