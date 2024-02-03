const db = require('./db/db.js')

// db.query('select 1 ', (err, results) => {
//     if (err) {
//         console.log(err.message)
//         return
//     }
//
//     console.log(results)
// })

db.query('select * from users', (err, results) => {
    if (err) {
        console.log(err.message)
        return
    }

    console.log(results)
})
