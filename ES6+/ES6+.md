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





















