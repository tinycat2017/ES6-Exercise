//this is a expansion of object exercise

/*** 1. Object.assign() ***/
//将源对象（source）的所有可枚举属性，复制到目标对象（target）
let target = { a: 1 };
let source = { b: 2 };
Object.assign(target, source);
target // {a: 1, b: 2}

//如果有同名参数，则源对象的属性将覆盖目标对象
let target = { a: 1 };
let source = { a: 2 };
Object.assign(target, source);
target // {a: 2}

//若源对象（source）存在不可枚举属性，则不会将该属性拷贝到目标对象中
let target = { a: 1 };
Object.assign(target, Object.defineProperty({}, 'b', {
    value: '2',
    enumerable: false
}));
target //{a: 1}

//若 source 本身不是对象，则考虑是否是字符串，若为字符串，则将之转化为数组，然后一一拷贝，若不为字符串，则不拷贝
let target = {};
Object.assign(target, 'hello');
target //{0: "h", 1: "e", 2: "l", 3: "l", 4: "o"}

let target = {};
Object.assign(target, 1, false, null, undefined);
target //{}

// Object.assign 也可以拷贝以 symbol 为 key 的属性
let target = {};
Object.assign(target, {
    [Symbol('a')]: 1
});
target //{Symbol(a): 1}

// Object.assign 实行的是对源对象属性的浅拷贝，也就是说无法拷贝继承属性
let target = {};
let source = { a: { b: 1 } };
Object.assign(target, source);
target.a.b = 2;
source.a.b // 2，由于 target 获得的是 a 属性的引用，所以不管修改 target 还是 source ，另外一个都会受到影响

// Object.assign 可以处理数组，不过会将数组当做对象来处理
let target = [0, 1, 2];
let source = [3, 4];
Object.assign(target, source);
target //[3,4,2]

// 想要获取对象属性的描述对象可以通过Object.getOwnPropertyDescriptor()来获取
let obj = Object.defineProperty({}, 'a', {
    value: 1,
    configurable: true,
    writable: true,
    enumerable: true
})
Object.getOwnPropertyDescriptor(obj, 'a'); //{value: 1, writable: true, enumerable: true, configurable: true}

// 仅操作可枚举属性的四个方法
// 1. for...in...
// for...in... 遍历对象自身和继承链上的所有可枚举属性
let obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false
})
for (let key in obj) {
    console.log(key);
}
//a
//b

// 2. Object.keys()
// Object.keys()仅返回对象自身可枚举属性的 key 
let obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false
})
Object.keys(obj); //["a", "b"]

// 3. Object.assign()
// Object.assign() 仅将源对象上可枚举属性拷贝入目标对象
let obj = { a: 1 };
let source = Object.defineProperty({ b: 2 }, "c", {
    value: 3,
    enumerable: false
});
Object.assign(obj, source); //{a: 1, b: 2}

// 4. JSON.stringify()
// JSON.stringify() 仅仅string化可枚举属性
let obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false
})
JSON.stringify(obj) //"{"a":1,"b":2}"

/*** 1. Object.assign() ***/

/*** 2. 对象的遍历 ***/
//目前对象的遍历方法有5种
//for...in... 和 Object.keys() 在上面已经写过，就不再多说
// 1. Object.getOwnPropertyNames(obj)
let obj = {
    [Symbol('a')]: 1, b: 2 };
Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false
})
Object.getOwnPropertyNames(obj); // ["b", "c"]，getOwnPropertyNames 获取对象自身除了 Symbol 属性之外的所有属性，包括不可枚举

// 2. Object.getOwnPropertySymbols(obj)
let obj = {
    [Symbol('a')]: 1, b: 2 };
Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false
})
Object.getOwnPropertySymbols(obj); // [Symbol(a)]，getOwnPropertySymbols 获取对象自身所有的 Symbol 属性

// 3. Reflect.ownKeys(obj)
let obj = {
    [Symbol('a')]: 1, b: 2 };
Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false
})
Reflect.ownKeys(obj); //["b", "c", Symbol(a)]， Reflect.ownKeys(obj)获取对象自身所有属性的 key，包括不可枚举和 Symbol

// 4. Object.vaules()
// 与 Object.keys() 类似，遍历对象自身的可枚举的属性值，不包含 Symbol 键值对应的值
let obj = {
    [Symbol('a')]: 1, b: 2 };
Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false
})
Object.values(obj); //[2]

// 5. Object.entries()
let obj = {
    [Symbol('a')]: 1, b: 2 };
Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false
})
Object.values(obj); //[["b", 2]]

/*** 2. 对象的遍历 ***/