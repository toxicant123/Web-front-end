const express = require('express')
const cors = require('cors')

const app = express()

const router = require('./router/apiRouter')

app.use(cors())

app.use(express.json())

app.use('/api', router)

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})