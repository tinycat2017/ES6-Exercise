//this is a expansion of function exercise

/**** 1. 函数参数默认值 ****/
function test1(x = 0, y = 0) {
    console.log(x, y);
    return x + y;
}
test1(1, 1) // 2
test1() // 0, x = 0, y = 0
test1(1) //1, x = 1, y = 0
test1(undefined, 1); // 1, x = 0, y = 1
test1(null, 1) // 1, x = null, y = 1 

//需要注意的是，使用参数默认值时，函数不能有同名参数
//原因是在使用参数默认值时，参数会形成一个单独的作用域（context），等到函数初始化结束，这个作用域会自动消失
//在单独的作用域（context）中，每个参数是用 let 来声明的，而在同一作用域中不能声明两个同名的变量
function test2(x = 0, x = 0) { //SyntaxError: Duplicate parameter name not allowed in this context
    return x + x;
}
test2();

let a = 1;

function test3(b = a) { //函数初始化时形成一个单独的参数作用域，作用域里没找到 a 变量，由此向外层作用域中去找，最终找到 a 变量
    console.log(b) // 1
}
test3();

//函数参数的默认值如果是一个表达式的话，这个表达式是惰性求值的，只有当没传入此参数或者传入 undefined 是才会去求默认值的表达式的值
let num = (a, b) => a + b;

function test4(number1 = num(1, 1)) {
    console.log(number1); // 2
}
test4();

//函数参数还可以与解构赋值结合使用，这个在解构赋值的练习中已经提过，这里不再赘述~

// 需要记住的是，指定了默认值的参数不再被计入函数的 length 之中
function test5(a, b = 1) {
    return a + b;
}
test5.length // 1

// 在函数中使用 rest 参数
function test6(a, ...arr) {
    console.log(arr); // [2,3,4]
}
test6(1, 2, 3, 4);

// rest 参数获取多余的参数，并将这些参数放入数组之中，这样比起 arguments 参数来说其实是方便了很多，因为 arguments 是类数组对象
// arguments 参数无法直接调用数组的那些方法，需要利用 Array.prototype.xxxx.call(arguments) 才能调用数组的方法，非常麻烦
// 而 rest 参数则避免了这些问题，它本身就是一个数组，可直接调用其方法
// arguments变量的写法
function sortNumbers() {
    return Array.prototype.slice.call(arguments).sort();
}
// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();

// 注意，在 rest 参数后面不能再有别的参数，而且 rest 参数不计入函数 length 的计算中
let sum = (a, ...arr, b) => a + b //SyntaxError: Rest parameter must be last formal parameter
let sum = (a, ...arr) => a
sum.length // 1

/**** 1. 函数参数默认值 ****/

/**** 2. 箭头函数 ****/
let f = num => num;
f(1); // 1

//箭头函数简化了回调
[1, 2, 3, 4].map(function(a) {
        return a + 1;
    })
    //[2,3,4,5]

[1, 2, 3, 4].map(a => a + 1);
//[2,3,4,5]

//箭头函数的注意点
// 1. 箭头函数自身没有 this，他的 this 是定义时所在的对象，而不是使用时所在的对象
function test7() {
    setTimeout(() => {
        console.log(this.name) // nicole 
    }, 1000);

    setTimeout(function() {
        console.log(this.name) //无值 
    }, 1000);
}
test7.call({ name: 'nicole' });

// 2. 箭头函数自身没有 this，因此也不能将箭头函数作为构造函数
// 而且arguments、super、new.target 在箭头函数里也是没有的

/**** 2. 箭头函数 ****/

/**** 3. ES6 中的尾调用及尾调用优化 ****/
//尾调用指某个函数的最后一步是调用另一个函数
function test8(a) {
    return test9(a)
}
//如果在函数的最后一步不是 return 需要调用的函数的话，则不是尾调用

// ES6 为尾调用设置了优化，尾调用的函数将在函数调用栈中取代当前函数的栈，实现了对空间的优化
function f() {
    let m = 1;
    let n = 2;
    return g(m + n);
}
f(); //如果函数g不是尾调用，函数f就需要保存内部变量m和n的值、g的调用位置等信息。但由于调用g之后，函数f就结束了，所以执行到最后一步，完全可以删除f(x)的调用帧，只保留g(3)的调用帧

/**** 3. ES6 中的尾调用及尾调用优化 ****/