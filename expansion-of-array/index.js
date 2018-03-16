//this is a expansion of array exercise

/**** 1. 拓展运算符(spread)****/
// 拓展运算符将一个数组转为用逗号分隔的参数序列
console.log(...['a', 'b', 'c']); //a b c

// 我们可以将之运用于函数调用之中
function test1(...arr) {
    for (let temp of arr) {
        console.log(temp)
    }
}
test1(...[1, 2, 3]);
//1
//2
//3

// 拓展运算符后面还可以跟表达式
let x = 1;
let obj = {
    ...(x > 0 ? ['a'] : []),
    w2: 'b'
}
console.log(obj) //{0: "a", w2: "b"}

// 拓展运算符运用于数组拼接中
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr2.push(...arr1); // [4, 5, 6, 1, 2, 3]

let arr3 = [...arr1, ...arr2, 7, 8]; // [1, 2, 3, 4, 5, 6, 1, 2, 3, 7, 8]

// 拓展运算符运用于复制数组
// 1. ES5 复制数组
var arr1 = [0, 1]
var arr2 = arr1.concat();
arr2 // [0,1]

// 2. ES6 运用拓展运算符复制数组
let arr1 = [0, 1]
let arr2 = [...arr1];
arr2 // [0, 1]

// 拓展运算符与解构赋值的结合，需要注意的是，拓展运算符只能放在参数的最后一位，否则会出错
let [a, ...arr1] = [1, 2, 3];
arr1; // [2,3]

// 拓展运算符将字符串转化为数组
[...
    "hello"
] // ["h", "e", "l", "l", "o"]

// 实现了 Iterator 接口的对象均能够使用拓展运算符将其转化为真正的数组
let nodeList = document.querySelectorAll('div');
let arr4 = [...nodeList]; // [div#sidebar, div#content, div#disqus_thread]

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
let arr5 = [...map]; //[[1, "one"], [2, 'two'],[3, 'three']]
let arr6 = [...map.keys()] // [1,2,3]

let set = new Set(['h', 'i']);
let arr7 = [...set]; // ['h','i']

let go = function*() {
    yield 1;
    yield 2;
    yield 3;
};
[...go()] // [1, 2, 3]

/**** 1. 拓展运算符(spread)****/

/**** 2. Array.from() 和 Array.of() ****/
// 1. Array.from()
//与拓展运算符可将类数组对象和有 iterator 接口的对象转化成数组一样，Array.from()也有同样的功能
let arr8 = Array.from('hello'); //["h", "e", "l", "l", "o"]

let go = function*() {
    yield 1;
    yield 2;
    yield 3;
};
let arr9 = Array.from(go()); // [1, 2, 3]

// 2. Array.of()
// Array.of方法用于将一组值，转换为数组
let arr9 = Array.of(1, 2, 3); //[1,2,3];

function ArrayOf() {
    return [].slice.call(arguments);
}
let arr9 = ArrayOf(1, 2, 3); //[1,2,3];

/**** 2. Array.from() 和 Array.of() ****/

/*** 3. 数组方法 ***/
// 1.  find() 和 findIndex() 
// find()找出第一个符合条件的数组成员，参数是一个回调函数
//所有数组成员依次执行该回调函数，找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined
[1, 5, 9, 10].find((value, index, arr) => value > 8); // 9

// findIndex()找出第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
[1, 5, 9, 10].findIndex((value, index, arr) => value > 8); // 2

// 2. entries()，keys() 和 values()
for (let entry of[1, 5, 9, 10].entries()) {
    console.log(entry);
}
//[0, 1]
//[1, 5]
//[2, 9]
//[3, 10]

// 3. includes()
['h', 1, 3].includes('h'); // true

/*** 3. 数组方法 ***/