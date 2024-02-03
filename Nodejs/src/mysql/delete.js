const db = require('./db/db')

const sqlStr = 'delete from users where id = ?'

db.query(sqlStr, 1, (err, results) => {
    if (err) {
        console.log(err.message)
        return
    }

    if (results.affectedRows === 1) {
        console.log('删除数据成功')
    }
})