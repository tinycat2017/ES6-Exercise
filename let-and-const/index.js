//this is let exercise

/*******let 有块级作用域限制这一说*********/
{
    let a = 1;
    var b = 2;
}
console.log(a);// a is not defined
console.log(b);//2

//用一个比较经典的问题来看看 let 与 var 在块级作用域限制这个问题上的不同
var arr1 = [];
for (let a = 1;a < 5;a++){
    setTimeout(() => console.log(a),1000);
}
//此时因为let变量块级作用域的限制，在1000ms之后陆续输出0-4 这样的5个数字

var arr1 = [];
for (var a = 1;a < 5;a++){
    setTimeout(() => console.log(a),1000);
}
//此时在1000ms之后陆续输出连续的数字5 五次
/*******let 有块级作用域限制这一说*********/


/*******let 不存在变量提升  *********/
//var 定义的变量存在变量提升，因此可以在变量定义之前就可以使用，只不过变量的值是 undefined 
console.log(temp1)//undefined
var temp1 = 'a';

//let 定义的变量不存在变量提升，因此如果在变量定义前访问变量，会发生报错ReferenceError
console.log(temp2);//ReferenceError: temp2 is not defined
let temp2 = 'b';

//由于 let 定义的变量不存在变量提升，由此也会引出一个暂存性死区的问题
//如果区块中存在let命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
{
    console.log(temp3);//ReferenceError: temp3 is not defined

    temp3 = 2;//ReferenceError: temp3 is not defined
    let temp3 = 3;
    console.log(temp3);//3
}
