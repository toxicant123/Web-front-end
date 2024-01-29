# Nodejs

## 1. fs

### 1.1 readFile

```js
const fs = require('fs');

fs.readFile('1.txt', 'utf8', (err, dataStr) => {
    console.log(this)

    console.log(err, dataStr)
})
```

### 1.2 writeFile

```js
const fs = require('fs');

fs.writeFile('2.txt', 'Hello, Nodejs!', err => {
    console.log(err)
})
```

### 1.3 __dirname 和 __filename

* __dirname 表示当前js文件所处的文件夹名称
* __filename 表示当前js文件全路径

```js
console.log(__dirname)
console.log(__filename)
```

建议使用`__dirname`来定位文件

### 1.4 path

请使用path拼接路径

```js
const path = require('path');

const path1 = path.join('/a', '/b/c', '../', './', '/d');
console.log(path1)

const path2 = path.join(__dirname, '1.txt')
console.log(path2)

const fileName = path.basename(path2);
console.log(fileName)

const fileNameWithoutExt = path.basename(path2, '.txt');
console.log(fileNameWithoutExt)

const extName = path.extname(path2);
console.log(extName);
```

## 2 http

### 2.1 建立http服务器

```js
const http = require('http')

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("someone visit our server")
})

server.listen(8080, () => {
    console.log('server running at local')
})
```

### 2.2 返回给客户端信息

```js
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
```

## 3 模块化

test
































