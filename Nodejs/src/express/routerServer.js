const express = require('express')

const app = express()

const router  = require('./router/router.js')

app.use(router)

app.listen(80, () => {
    console.log('http://127.0.0.1')
})