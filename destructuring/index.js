//this is a destructuring of variable

/***** 1. 数组的解构赋值 *****/
//具有 iterator 接口的数据能够采用数组形式的解构赋值，包括向 Map，Set，Generator 等数据
let [a, b, c] = [4, 5, 6]; //a=4,b=5,c=6
//数组解构赋值按照一定的模式来从等式右侧的数组中提取数值并复制到对应的左侧模式中的变量

let [head, ...arr1] = [1, 2, 3, 4];
//head = 1
//arr1 = [2,3,4]

let [a, b, arr2] = ['hello'];
//a = 'hello'
//b = undefined
//arr2 = []

let [a, [b], d] = [1, [2, 3], 4];
//a = 1, b = 2, d = 4

//如果右侧数据是 undefined，null，NaN，{}，false，true，数字 这些无 iterator 接口的数据则无法通过数组解构赋值的方法来处理
let [foo] = 1; // 1 is not iterable
let [foo] = false; // false is not iterable
let [foo] = NaN; // NaN is not iterable
let [foo] = undefined; // undefined is not iterable
let [foo] = null; // null is not iterable 
let [foo] = {}; // {} is not iterable 

//而对于类似 Map 和 Set 这样的具有iterator接口的数据则可以使用数组的解构赋值
let [a, b] = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);
a // ['name', '张三']
b // ['title', 'Author']

let [x, y] = new Set(['hello', 'world']);
x // "hello"
y // "world"

//数组解构赋值的默认值
let [x = 0, y = 2] = [];
x // 0
y // 2

//默认还可以是一个函数表达式
function f() {
    console.log('aaa');
}
let [x = f()] = [];
x // 'aaa'
//这种默认值是惰性求值的，也就是说只有到解构无对应值时，才会主动去执行函数求得默认值

/***** 1. 数组的解构赋值 *****/

/***** 2. 对象的解构赋值 *****/
//与数组解构赋值不同的是，数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
let { bar, foo } = { foo: 'hi', bar: 'world' };
bar // "world"
foo // "hi"

let { bar } = { foo: 'hi' };
bar // undefined 
//如果无同名属性，则为 undefined

//实际上对象的解构赋值的格式是
let { bar: bar, foo: foo } = { foo: 'hi', bar: 'world' };
//对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

//对象的嵌套解构赋值
let obj = {
    p: [
        'see',
        { str: 'you' }
    ]
}
let { p: [x, { str }] } = obj;
p //ReferenceError: p is not defined，这里的 p 仅仅指的是对应的模式，所以并不是真正赋值给 p
x // "see"
str // "you"

let obj = {
    p: [
        'see',
        { str: 'you' }
    ]
}
let { p, p: [x, { str }] } = obj;
p // ['see',{str:'you'}]

//对象的解构也可以指定默认值
let { x: y = 0 } = { x: 3 }
y // 3

let { x: y = 0 } = {}
y // 0

/***** 2. 对象的解构赋值 *****/


/***** 3. 字符串的解构赋值 *****/

let [a, b, c, d, e] = 'hello';
// a = 'h', b = 'e', c = 'l', d = 'l', e = 'e'
let { length: len } = 'hello';
len // 5 可以对字符串的 length 属性进行解构赋值

/***** 3. 字符串的解构赋值 *****/

/***** 4. 解构赋值用于函数参数 *****/
function test1([x, y]) {
    return x + y;
}
test1([1, 2]) // 3

//解构赋值参数默认值
function test2([x = 0, y = 1]) {
    return x + y
}
test2() //TypeError: Cannot read property 'Symbol(Symbol.iterator)' of undefined
test2([]); // 1
test2([1]) // 2
test2([1, 2]); // 3

function test2([x, y] = [0, 1]) {
    return x + y
}
test2(); // 1
test2([]); // NaN
test2([1]) // NaN  x = 1, y = undefined
test2([1, 2]); // 3

/***** 4. 解构赋值用于函数参数 *****/


/***** 5. 解构赋值的主要几个用途 *****/

// 1. 交换变量
let x = 1,
    y = 2;
[x, y] = [y, x]; //可以通过解构赋值来实现交换变量的值

// 2. 接受从函数返回的多个值
function test3() {
    return [1, 2, 3];
}
let [a, ...b] = test3(); // a = 1,b = [2,3]

// 3. 函数参数的定义,以及参数的默认值
function test4([a = 0, b = 0]) {
    return a + b;
}
test4([1, 2]) // 3

// 4. 提取 JSON 数据
let jsData = {
    id: '11001',
    name: 'nicole',
    age: '22'
}
let { id, name, age } = jsData;

// 5. 遍历 Map 结构的数据
let newMap = new Map();
newMap.set('id', '11001');
newMap.set('name', 'nicole');

for (let [key, value] of newMap) {
    console.log(key, value);
}
//id 11001
//name nicole

//仅仅获取 key
for (let [key] of newMap) {
    console.log(key);
}
//id
//name

//仅仅获取 value
for (let [, value] of newMap) {
    console.log(value);
}
//11001
//nicole

// 6. 输入模块的指定方法
const { SourceMapConsumer, SourceNode } = require("source-map");

/***** 5. 解构赋值的主要几个用途 *****/