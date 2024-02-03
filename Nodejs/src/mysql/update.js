const db = require('./db/db.js')

const user = {
    id: 2,
    username: 'aaa',
    password: '000'
}

// const sqlStr = 'update users set username = ?, password = ? where id = ?'
//
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) {
//         console.log(err.message)
//         return
//     }
//
//     if (results.affectedRows === 1) {
//         console.log('更新数据成功')
//     }
// })

const sqlStr = 'update users set ? where id = ?'

db.query(sqlStr, [user, user.id], (err, results) => {
    if (err) {
        console.log(err.message)
        return
    }

    if (results.affectedRows === 1) {
        console.log('更新数据成功')
    }
})