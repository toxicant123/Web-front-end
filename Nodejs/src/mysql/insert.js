const db = require('./db/db.js')

// const user = {
//     username: 'Spider-Man',
//     password: 'pcc123'
// }
//
// const sqlStr = 'insert into users(username, password) value (?, ?)'
//
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//     if (err) {
//         console.log(err.message)
//         return
//     }
//
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功')
//     }
// })

const user = {
    username: 'Spider-Man2',
    password: 'pcc4312'
}

const sqlStr = 'insert into users set ?';

db.query(sqlStr, user, (err, results) => {
    if (err) {
        console.log(err.message)
        return
    }

    if (results.affectedRows === 1) {
        console.log('插入数据成功')
    }
})



