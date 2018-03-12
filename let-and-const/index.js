//this is let exercise

/******* 1. let 有块级作用域限制这一说*********/
{
    let a = 1;
    var b = 2;
}
console.log(a); // a is not defined
console.log(b); //2

//用一个比较经典的问题来看看 let 与 var 在块级作用域限制这个问题上的不同
var arr1 = [];
for (let a = 1; a < 5; a++) {
    setTimeout(() => console.log(a), 1000);
}
//此时因为let变量块级作用域的限制，在1000ms之后陆续输出0-4 这样的5个数字

var arr1 = [];
for (var a = 1; a < 5; a++) {
    setTimeout(() => console.log(a), 1000);
}
//此时在1000ms之后陆续输出连续的数字5 五次
/******* 1. let 有块级作用域限制这一说*********/


/******* 2. let 不存在变量提升  *********/
//var 定义的变量存在变量提升，因此可以在变量定义之前就可以使用，只不过变量的值是 undefined 
console.log(temp1) //undefined
var temp1 = 'a';

//let 定义的变量不存在变量提升，因此如果在变量定义前访问变量，会发生报错ReferenceError
console.log(temp2); //ReferenceError: temp2 is not defined
let temp2 = 'b';

//由于 let 定义的变量不存在变量提升，由此也会引出一个暂存性死区的问题
//如果区块中存在let命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
{
    console.log(temp3); //ReferenceError: temp3 is not defined

    temp3 = 2; //ReferenceError: temp3 is not defined
    let temp3 = 3;
    console.log(temp3); //3
}

//因为有暂存性死区这一问题，所以会出现下列情况
{
    var x = x; //undefined

    let y = y; //ReferenceError: y is not defined
}
//需要注意一些很隐蔽的问题，比如函数参数默认值的情况
function fun1(x = y, y = 2) { //ReferenceError: y is not defined
    return x + y
}
//只要在参数申明之后使用就没有问题，比如：
function fun1(x = 2, y = x) {
    return x + y //4
}

//暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了
//但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

//let 声明的变量在同一个作用域之内是不能够重复声明的，而var 声明的变量则是可以的
function fun2() {
    let a = 1;
    var a = 2; //SyntaxError: Identifier 'a' has already been declared
    console.log(a);
}
fun2()

function fun2() {
    let a = 1;
    let a = 2; //SyntaxError: Identifier 'a' has already been declared
    console.log(a);
}
fun2()

//同样的，不能在函数内部重新声明参数，这就意味着，参数的作用域和函数内部作用域是同一个
function fun3(a) {
    let a = 1; //SyntaxError: Identifier 'a' has already been declared
    console.log(a);
}
fun3()

//如果在函数内部新建一个块级作用域，那么就可以在其新建的作用域内部声明与函数参数同名的参数
function fun3(a) {
    if (true) {
        let a = 1;
        console.log(a); //1
    }
}
fun3()
    /******* 2. let 不存在变量提升  *********/


/******* 3. 块级作用域细谈  *********/
//出现了块级作用域之后，我们可以使得外部域里的变量不再受到内部作用域变量的影响
function fun4() {
    var x = 1;
    if (true) {
        var x = 5;
    }
    console.log(x); //5,此时 x 的值受到了 if 条件内部的影响
}
fun4();

function fun4() {
    let x = 1;
    if (true) {
        let x = 5;
    }
    console.log(x); // 1
}
fun4();

//在块级作用域里声明函数
//在 ES5 的情况下运行，函数会出现提升
function f() { console.log('I am outside!'); }
(function() {
    if (false) {
        function f() { console.log('I am inside!'); }
    }

    f(); //I am inside!  
}());

//在 ES6 的情况下运行，函数声明类似于var，即会提升到全局作用域或函数作用域的头部。同时，函数声明还会提升到所在的块级作用域的头部。
function f() { console.log('I am outside!'); }
(function() {
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }
    f(); //TypeError: f is not a function
}());


//出现这种结果的原因是，函数 f 被提升，但是变成了 var f = undefined
function f() { console.log('I am outside!'); }
(function() {
    var f = undefined
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }
    f(); //TypeError: f is not a function
}());
//所以在块级作用域内定义函数时，尽量采用函数表达式。
/******* 3. 块级作用域细谈  *********/

/******* 4. const  *********/
//const 与 let 类似，唯一区别在于，const定义的变量需要在声明时就被赋值，且值不能被改变

const p = {};
p.a = 1;
p.title = "hi!";

p = { a: 1 } //error
    //需要注意的是，const 要求的不变是指的变量所指向的地址不变，因此如果const变量指向的是一个对象的话，那么对象的属性是可以自由改变的。