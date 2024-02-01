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

### 3.1 module.exports 与 exports

module对象是每个js文件的内置对象，提供了很多有用的信息

通过require()方法导入js文件中的变量，通过`module.exports`和`exports`导出js文件中的变量

main.js：

```js
const js1 = require('./1.js');

console.log(js1.name)

js1.log()
```

1.js：

```js
module.exports = {
    name: '1.js',
    log() {
        console.log("log from 1.js")
    }
}
```

注意：你可以使用`exports`来做到同样的效果，但它们两者的关系类似：

```js
let exports = {}
module.exports = exports
```

### 3.2 CommonJS模块化规范

1. 每个模块每部，module变量代表当前模块
2. module变量是一个对象，它的exports属性（即module.exports）是对外的接口
3. 加载某个模块，其实是加载该模块的module.exports属性。require()方法用于加载模块

### 3.3 npm包

npm包可以分为两类：
* 项目包  
  安装到项目的node_modules目录中的包都是项目包
  - 开发依赖包：被记录到devDependencies中的包，会在开发期间用到
  - 核心依赖包：被记录到dependencies中的包，会在开发期间和项目上线后用到
* 全局包  
  在执行`npm install`命令时，如果提供了`-g`参数，则会把包安装为全局包

npm包规范结构：
* 包必须以单独的目录而存在
* 包的顶级目录下要必须包含package.json这个包管理配置文件
* package.json中必须包含name, version, main这三个属性，分别代表包的名字、版本号、包的入口。

### 3.4 开发属于自己的npm包

[see](src/module/itheima-tools-cb2)

### 3.5 模块的加载机制

1. 优先从缓存中加载  
   模块在第一次加载后会被缓存。 这也意味着多次调用 require() 不会导致模块的代码被执行多次。  
   注意：不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率。
2. 内置模块是由 Node.js 官方提供的模块，内置模块的加载优先级最高。  
   例如，require('fs') 始终返回内置的 fs 模块，即使在 node_modules 目录下有名字相同的包也叫做 fs。
3. 使用 require() 加载自定义模块时，必须指定以 ./ 或 ../ 开头的路径标识符。在加载自定义模块时，如果没有指定 ./ 或 ../ 这样的路径标识符，则 node 会把它当作内置模块或第三方模块进行加载。  
   同时，在使用 require() 导入自定义模块时，如果省略了文件的扩展名，则 Node.js 会按顺序分别尝试加载以下的文件：
   1. 按照确切的文件名进行加载
   2. 补全 .js 扩展名进行加载
   3. 补全 .json 扩展名进行加载
   4. 补全 .node 扩展名进行加载
   5. 加载失败，终端报错
4. 如果传递给 require() 的模块标识符不是一个内置模块，也没有以 ‘./’ 或 ‘../’ 开头，则 Node.js 会从当前模块的父目录开始，尝试从 /node_modules 文件夹中加载第三方模块。  
   如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。  
   例如，假设在 'C:\Users\itheima\project\foo.js' 文件里调用了 require('tools')，则 Node.js 会按以下顺序查找：
   1. C:\Users\itheima\project\node_modules\tools
   2. C:\Users\itheima\node_modules\tools
   3. C:\Users\node_modules\tools
   4. C:\node_modules\tools
5. 当把目录作为模块标识符，传递给 require() 进行加载的时候，有三种加载方式：
   1. 在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性，作为 require() 加载的入口
   2. 如果目录里没有 package.json 文件，或者 main 入口不存在或无法解析，则 Node.js 将会试图加载目录下的 index.js 文件。
   3. 如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失：Error: Cannot find module 'xxx'

## 4 express

### 4.1 express对外提供接口

```js
const express = require('express')

const app = express()

app.get('/user', (req, res) => {
    res.send({
        name: 'zs',
        age: 20,
        gender: '男'
    })
})

app.post('/user', (req, res) => {
    res.send('请求成功')
})

app.get('/', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

app.get('/user/:id/:name', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.listen(80, () => {
    console.log(`express server running at http://127.0.0.1`)
})
```

### 4.2 托管静态资源

```js
const express = require('express')
const app = express()

app.use(express.static('public'))

app.listen(80, () => {
    console.log("static resource server begin...")
})
```

### 4.3 托管多份静态资源

```js
const express = require('express')
const app = express()

app.use('/public', express.static('public'))
app.use('/private', express.static('private'))

app.listen(80, () => {
    console.log("static resource server begin...")
})
```

### 4.4 模块化路由

为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块。

将路由抽离为单独模块的步骤如下：
1. 创建路由模块对应的 .js 文件
2. 调用 express.Router() 函数创建路由对象
3. 向路由对象上挂载具体的路由
4. 使用 module.exports 向外共享路由对象
5. 使用 app.use() 函数注册路由模块

```js
const express = require('express')

const app = express()

const router  = require('./router/router.js')

app.use(router)

app.listen(80, () => {
    console.log('http://127.0.0.1')
})
```

### 4.5 express中间件

```js
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
```
