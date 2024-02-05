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

### 8. 









