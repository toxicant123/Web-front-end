# ES6+

## ES6

### 1. let

let 关键字用来声明变量，使用 let 声明的变量有几个特点：
1) 不允许重复声明
2) 拥有块级作用域
3) 不存在变量提升
4) 不影响作用域链

### 2. const

const 关键字用来声明常量，const 声明有以下特点
1) 声明必须赋初始值
2) 标识符一般为大写
3) 不允许重复声明
4) 值不允许修改
5) 块儿级作用域

应用场景：声明对象类型使用 const，非对象类型声明选择 let

### 3. 变量的解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。

```js
const user = {
    id: 3,
    name: 'Tom',
    hobby: 'Jack',
    action() {
        console.log('catch!')
    }
}

const {id, name, hobby, action} = user;

console.log(id, name, hobby)
action()
```

### 4. 模板字符串

模板字符串（template string）是增强版的字符串，用反引号（`）标识，特点：
1) 字符串中可以出现换行符
2) 可以使用 ${xxx} 形式输出变量

```js
const user = {
    id: 3,
    name: 'Tom',
    hobby: 'Jack',
    action() {
        console.log('catch!')
    }
}

let str = `user id is ${user.id}, name is ${user.name}, hobby is ${user.hobby}`

console.log(str)
```

### 5. 简化对象写法

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

```js
let id = 3
let name = 'Tom'
let hobby = 'Jack'

function action() {
    console.log('catch!')
}

const user = {
    id,
    name,
    hobby,
    action
}
```

### 6. 箭头函数

ES6 允许使用「箭头」（=>）定义函数。

```js
let f = e => console.log(e)
```

箭头函数的注意点：
1) 如果形参只有一个，则小括号可以省略
2) 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果
3) 箭头函数 this 指向声明时所在作用域下 this 的值
4) 箭头函数不能作为构造函数实例化
5) 不能使用 arguments

注意：箭头函数不会更改 this 指向，用来指定回调函数会非常合适

### 7. 参数默认值

```js
function add(a = 1, b = 2, c = 3) {
    return a + b + c;
}

console.log(add())

function add2({n1 = 4, n2 = 5, n3 = 6}) {
    return n1 + n2 + n3;
}

console.log(add2({}))
```

### 8. rest 参数

ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments

```js
function add(a, ...arr) {
    arr.push(a)
    return arr.reduce((p, c) => p + c)
}

console.log(add(1, 2, 3, 4))
```

注意：rest 参数非常适合不定个数参数函数的场景

### 9. spread 扩展运算符

扩展运算符（spread）也是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包。

```js
const arr1 = [1, 2]
const arr2 = [3, 4]

const arr = [...arr1, ...arr2]

const obj1 = {
    a: 1,
    b: 2
}

const obj2 = {
    c: 3,
    d: 4
}

const obj = {
    ...obj1,
    ...obj2
}

console.log(arr, obj)
```

常用于：
1. 数组的合并
2. 数组的克隆
3. 将伪数组转为真正的数组

### 10. Symbol

unknown

### 11. 迭代器

遍历器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作。
1) ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费
2) 原生具备 iterator 接口的数据(可用 for of 遍历)
   1) Array
   2) Arguments
   3) Set
   4) Map
   5) String
   6) TypedArray
   7) NodeList
3) 工作原理
   1) 创建一个指针对象，指向当前数据结构的起始位置
   2) 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员
   3) 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员
   4) 每调用 next 方法返回一个包含 value 和 done 属性的对象

注: 需要自定义遍历数据的时候，要想到迭代器。

自定义迭代器：

```js
const user = {
    id: 3,
    name: 'Tom',
    items: [
        'book',
        'flower',
        'food',
        'scarf'
    ],
    [Symbol.iterator]() {
        let index = 0
        return {
            next: () => {
                return {
                    value: this.items[index],
                    done: index++ === this.items.length
                }
            }
        }
    }
}

for (let e of user) {
    console.log(e)
}
```

### 12. 生成器

生成器函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同

```js
function * info(arg1) {

    let arg2 = yield `A lot of ${arg1} is coming`

    let arg3 = yield `Weapon is under the ${arg2}`

    let arg4 = yield `Car is full of ${arg3}`

    return `Go and get it, ${arg4}`
}

let infos = info('enemy');

console.log(infos.next().value)
console.log(infos.next('desk').value)
console.log(infos.next('oil').value)
console.log(infos.next('John').value)
```

启动程序1s后控制台输出111，再过2s输出222，再过3s输出333

```js
function one() {
    setTimeout(() => {
        console.log(111)
        iterator.next()
    },1000)
}

function two() {
    setTimeout(() => {
        console.log(222)
        iterator.next()
    }, 2000)
}
function three() {
    setTimeout(() => {
        console.log(333)
    }, 3000)
}

function * gen() {
    yield one()
    yield two()
    yield three()
}

let iterator = gen();
iterator.next()
```

### 13. Promise

Promise 是 ES6 引入的异步编程的新解决方案。语法上 Promise 是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。

#### 13.1 Promise实例化

```js
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let random = Math.random()
        let data
        if (random > 0.5) {
            data = {
                status: 1,
                msg: 'success',
                data: 200
            }
            resolve(data)
        } else {
            data = {
                status: 0,
                msg: 'fail',
                data: 0
            }
            reject(data)
        }
    }, 1000)
})

p.then(v => {
    console.log(v)
}, r => {
    console.log(r)
})
```

#### 13.2 Promise读取文件

```js
const fs = require('fs')

const p = new Promise((resolve, reject) => {
    fs.readFile('./resources/论诗五首.txt', (err, data) => {
        if (err) {
            reject(err)
        }

        resolve(data)
    })
})

p.then(v => {
    console.log(v.toString())
}, r => {
    console.log('读取失败')
})
```

#### 13.3 Promise封装ajax

```js
const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'http://localhost:8080/hello')

    xhr.send()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status <= 300) {
                resolve(xhr.response)
            } else {
                reject(xhr.status)
            }
        }
    }
})

p.then(v => {
    console.log(v)
}, r => {
    console.log(r)
})
```

#### 13.4 then方法

```js
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('用户数据')
    }, 1000)
})

p.then(v => {
    console.log(v)
    return 'data2'
}, r => {
    console.log(r)
}).then(v => {
    console.log(v)
})
```

链式调用：

```js
const fs = require('fs')

// fs.readFile('./resources/论诗五首.txt', (err1, data1) => {
//     fs.readFile('./resources/江雪.txt', (err2, data2) => {
//         fs.readFile('./resources/送友人.txt', (err3, data3) => {
//             let result = data1 + '\r\n' + data2 + '\r\n' + data3
//             console.log(result)
//         })
//     })
// })

const p = new Promise((resolve, reject) => {
    fs.readFile('./resources/论诗五首.txt', (err, data) => {
        resolve(data)
    })
})

p.then(r => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/江雪.txt', (err, data) => {
            resolve(r + '\r\n' + data)
        })
    })
}).then(r => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/送友人.txt', (err, data) => {
            resolve(r + '\r\n' + data)
        })
    })
}).then(r => {
    console.log(r)
})
```

### 14. Set

ES6 提供了新的数据结构 Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for...of...』进行遍历，集合的属性和方法：
1) size 返回集合的元素个数
2) add 增加一个新元素，返回当前集合
3) delete 删除元素，返回 boolean 值
4) has 检测集合中是否包含某个元素，返回 boolean 值
5) clear 清空集合，返回 undefined

```js
const set = new Set(['a', 'a', 'b', 'b', 'b', 'c', 'd', 'd'])

for (let element of set) {
    console.log(element)
}

console.log(set.size)
set.add('f')
set.delete('a')
console.log(set.has('b'))
set.clear()
console.log(set.size)
```

### 15. Map

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map 也实现了 iterator 接口，所以可以使用『扩展运算符』和『for...of...』进行遍历。Map 的属性和方法：
1) size 返回 Map 的元素个数
2) set 增加一个新元素，返回当前 Map
3) get 返回键名对象的键值
4) has 检测 Map 中是否包含某个元素，返回 boolean 值
5) clear 清空集合，返回 undefined

### 16. Class类

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键字，可以定义类。基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

知识点：
1) class 声明类
2) constructor 定义构造函数初始化
3) extends 继承父类
4) super 调用父级构造方法
5) static 定义静态方法和属性
6) 父类方法可以重写

```js
class Phone {

    static name = '手机'

    static change() {
        console.log('我可以改变世界！')
    }

    constructor(brand, price) {
        this.brand = brand
        this.price = price
    }

    call() {
        console.log('我可以打电话')
    }
}

class SmartPhone extends Phone {
    constructor(brand, price, color, size) {
        super(brand, price)
        this.size = size
        this._color = color;
    }

    photo() {
        console.log('拍照')
    }

    playGame() {
        console.log('玩游戏')
    }

    call() {
        console.log('我可以进行视频通话')
    }


    get color() {
        console.log('color属性被读取了')
        return this._color;
    }

    set color(value) {
        console.log('color属性被修改了')
        this._color = value;
    }
}
```

### 17. 数值扩展

#### 17.1. 二进制和八进制

ES6 提供了二进制和八进制数值的新的写法，分别用前缀 0b 和 0o 表示。

#### 17.2. Number.isFinite() 与 Number.isNaN()

Number.isFinite() 用来检查一个数值是否为有限的

Number.isNaN() 用来检查一个值是否为 NaN

#### 17.3. Number.parseInt() 与 Number.parseFloat()

ES6 将全局方法 parseInt 和 parseFloat，移植到 Number 对象上面，使用不变。

#### 17.4. Math.trunc

用于去除一个数的小数部分，返回整数部分。

#### 17.5 Number.isInteger

Number.isInteger() 用来判断一个数值是否为整数

### 18. 对象拓展

ES6 新增了一些 Object 对象的方法
1) Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）
2) Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象
3) \_\_proto__、setPrototypeOf、 setPrototypeOf 可以直接设置对象的原型

### 19. 模块化

模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。

#### 19.1 模块化的好处

模块化的优势有以下几点：
1) 防止命名冲突
2) 代码复用
3) 高维护性

#### 19.2 模块化规范产品

ES6 之前的模块化规范有：
1) CommonJS => NodeJS、Browserify
2) AMD => requireJS
3) CMD => seaJS

#### 19.3 ES6 模块化语法

模块功能主要由两个命令构成：export 和 import。
* export 命令用于规定模块的对外接口
* import 命令用于输入其他模块提供的功能

分别暴露：

```js
export let a = 1

export function A() {
    console.log('this is func A')
}
```

统一暴露：

```js
let b = 2

function B() {
    console.log('this is func B')
}

export {
    b,
    B
}
```

默认暴露：

```js
let c = 3

function C() {
    console.log('this is func C')
}

export default {
    c,
    C
}
```

通用导入：

```js
import * as m1 from './1.js'
import * as m2 from './2.js'
import * as m3 from './3.js'

console.log(m1.a, m2.b, m3.default.c)

m1.A()
m2.B()
m3.default.C()
```

解构赋值导入：

```js
import {a, A} from './1.js'
import {b as b1, B} from './2.js'
import {default as m3} from './3.js'

console.log(a, b1, m3.c)

A()
B()
m3.C()
```

简便导入（只能用于导入默认暴露的模块）：

```js
import m3 from './3.js'

console.log(m3.c)
m3.C()
```

## ES7

### 1. Array.prototype.includes

includes 方法用来检测数组中是否包含某个元素，返回布尔类型值

```js
const arr = [1, 2, 3, 4, 5]

console.log(arr.includes(1), arr.includes(6))
```

### 2. 指数操作符

在 ES7 中引入指数运算符「**」，用来实现幂运算，功能与 Math.pow 结果相同

```js
let num = 2 ** 10

console.log(num)
```

## ES8

### 1. async 和 await

async 和 await 两种语法结合可以让异步代码像同步代码一样：
1. async 函数的返回值为 promise 对象
2. promise 对象的结果由 async 函数执行的返回值决定
3. await 必须写在 async 函数中
4. await 右侧的表达式一般为 promise 对象
5. await 返回的是 promise 成功的值
6. await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理

读取文件：

```js
const fs = require('fs')

function read(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                throw err
            }
            resolve(data)
        })
    })
}

async function main() {
    let s1 = await read('./resources/江雪.txt')

    let s2 = await read('./resources/论诗五首.txt')

    let s3 = await read('./resources/送友人.txt')

    console.log(s1.toString(), s2.toString(), s3.toString())
}

main()
```

### 2. Object.values 和 Object.entries

1. Object.values()方法返回一个给定对象的所有可枚举属性值的数组
2. Object.entries()方法返回一个给定对象自身可遍历属性 [key,value] 的数组

### 3. Object.getOwnPropertyDescriptors

该方法返回指定对象所有自身属性的描述对象

## ES9

### 1. Rest/Spread 属性

Rest 参数与 spread 扩展运算符在 ES6 中已经引入，不过 ES6 中只针对于数组，在 ES9 中为对象提供了像数组一样的 rest 参数和扩展运算符

```js
function connect({host, port, ...user}) {
    console.log(host, port, user)
}

connect({
    host: 'localhost',
    port: 8080,
    username: 'admin',
    password: 123456
})


const o1 = {
    a: 1,
    b: 2
}

const o2 = {
    c: 3,
    d: 4
}

const o = {
    ...o1,
    ...o2
}

console.log(o)
```

### 2. 正则表达式命名捕获组

ES9 允许命名捕获组使用符号『?<name>』,这样获取捕获结果可读性更强

```js
let str = '<a href="http://www.atguigu.com">尚硅谷</a>';

const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;

const result = reg.exec(str);

console.log(result.groups.url);

console.log(result.groups.text);
```

### 3. 正则表达式反向断言

ES9 支持反向断言，通过对匹配结果前面的内容进行判断，对匹配进行筛选。

```js
//声明字符串
let str = 'JS5211314你知道么555啦啦啦';
//正向断言
const reg1 = /\d+(?=啦)/;
const result1 = reg1.exec(str);
//反向断言
const reg2 = /(?<=么)\d+/;
const result2 = reg2.exec(str);
console.log(result1, result2);
```

### 4. 正则表达式 dotAll 模式

正则表达式中点.匹配除回车外的任何单字符，标记『s』改变这种行为，允许行终止符出现

```js
let str = `
<ul>
 <li>
 <a>肖生克的救赎</a>
 <p>上映日期: 1994-09-10</p>
 </li>
 <li>
 <a>阿甘正传</a>
 <p>上映日期: 1994-07-06</p>
 </li>
</ul>`;
//声明正则
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;
let result;
//执行匹配
let data = [];
while (result = reg.exec(str)) {
    data.push({title: result[1], time: result[2]});
}
//输出结果
console.log(data);
```

## ES10

### 1. Object.fromEntries

```js
let o = Object.fromEntries([
    [1, 2],
    ['a', 'b']
])
```

### 2. String.prototype.trimStart 和 String.prototype.trimEnd

```js
let str = '   a    '

console.log(1 + str.trim() + 1)
console.log(1 + str.trimStart() + 1)
console.log(1 + str.trimEnd() + 1)
```

### 3. Array.prototype.flat 与 flatMap

```js
let arr = [[1, 2], [3, 4], [5, 6]]

console.log(arr.flat())

console.log(arr.flatMap(e => e.map(e => e + 5)))
```

### 4. Symbol.prototype.description

```js
let s = Symbol('a')

console.log(s.description)
```

## ES11

### 1. 私有属性

```js
class Person {
    name

    #age = 1

    #weight

    constructor(name, age, weight) {
        this.name = name
        this.#age = age
        this.#weight = weight
    }

    get age() {
        return this.#age
    }
}

const p = new Person('Tom', 7, '15');

console.log(p.age)
```

### 2. Promise.allSettled

```js
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('商品数量 - 1')
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('出错啦')
    }, 1000)
})

const result = Promise.allSettled([p1, p2])

result.then(v => {
    console.log('success')
    console.log(v)
}, r => {
    console.log('failed')
    console.log(r)
})
```

### 3. String.prototype.matchAll

```js
let str = `
<ul>
 <li>
 <a>肖生克的救赎</a>
 <p>上映日期: 1994-09-10</p>
 </li>
 <li>
 <a>阿甘正传</a>
 <p>上映日期: 1994-07-06</p>
 </li>
</ul>`;

const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/sg;

const result = str.matchAll(reg)

for (let e of result) {
    console.log(e)
}
```

