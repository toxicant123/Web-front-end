const fs = require('fs')

fs.writeFile('2.txt', 'Hello, Nodejs!', err => {
    console.log(err)
})