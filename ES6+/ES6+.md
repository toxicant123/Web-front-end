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








