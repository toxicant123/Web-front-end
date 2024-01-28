const http = require('http')

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("someone visit our server")
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('你好')
})

server.listen(8080, () => {
    console.log('server running at local')
})

