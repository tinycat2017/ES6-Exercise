// this is a symbol exercise

// 对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型
// 凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突
let s1 = Symbol('a');
let s2 = Symbol('a');
s1 == s2 // false

console.log(typeof s1); //symbol

//因为 symbol 是一个原始类型的数据，不是一个对象，所以无法为其添加属性，同样的，也不能对 Symbol 函数使用 new 关键字
//Symbol函数可以接受一个字符串作为参数
//如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串
let obj = {
    toString() {
        return '123';
    }
}
let s3 = Symbol(obj);
s3 // Symbol(123)

//Symbol 值不能与其他类型的值进行运算
let s1 = Symbol('a');
let str = 'hello'+s1; //TypeError: Cannot convert a Symbol value to a string
let str1 = `hello,${s1}`; //TypeError: Cannot convert a Symbol value to a string

let s2 = Symbol(2);
let str2 = 1+s2; //TypeError: Cannot convert a Symbol value to a number

//Symbol 值可以显式转为字符串,转为布尔值,但是不能转为数值
let s1 = Symbol('a');
s1.toString();// "Symbol(a)"
String(s1);// "Symbol(a)"
Boolean(s1); //true

let s2 = Symbol(2);
Number(s2); //TypeError: Cannot convert a Symbol value to a number

//将 Symbol 作为属性名
// 1. 通过方括号结构来弄
let s4 = Symbol('a');
let obj = {
    [s4]:1
}
obj[s4];//1

// 2. 通过 Object.defineProperty
let s5 = Symbol('b');
let obj = Object.defineProperty({},s5,{
    value:2,
    enumerable: true
})
console.log(obj[s5]);//2

//Symbol 值作为对象属性名时，不能用点运算符
//因为点运算符后面总是字符串，所以不会读取Symbol作为标识名所指代的那个值，导致属性名实际上是一个字符串
//在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中

// Symbol.for() 和 Symbol.keyFor()
// 1. Symbol.for(value)
// 如果全局中暂无拥有当前value 值的描述的 Symbol 对象，则向全局注册并创建一个 Symbol，若有，则返回该 Symbol
let s6 = Symbol.for('hello');
let s7 = Symbol.for('hello');
s6 === s7 //true

// 2. Symbol.keyFor(symbol)
// Symbol.keyFor(symbol)返回一个已登记的 Symbol 类型值的key
let s6 = Symbol.for('hello');
let s7 = Symbol('hello');
let key6 = Symbol.keyFor(s6);//"hello"
let key7 = Symbol.keyFor(s7);//undefined



