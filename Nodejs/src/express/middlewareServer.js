const express = require('express')
const app = express()

/**
 * 全局生效的中间件
 */
const middleware = (req, res, next) => {
    console.log('through a simple middleware')
    next()
}

/**
 * 局部生效的中间件
 */
const partialMiddleware = (req, res, next) => {
    console.log('through a partialMiddleware')
    next()
}

app.use(middleware)

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/partial', partialMiddleware, (req, res) => {
    res.send('partial')
})

app.listen(80, () => {
    console.log('server running...')
})