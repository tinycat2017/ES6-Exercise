//this is a expansion of string

// ES6 为字符串添加了 Iterator 接口，因此可以使用 for of 来遍历字符串
for (let code of 'hello') {
    console.log(code); // 'h','e','l','l','o'
}

//在 ES6 中已实现通过 charAt 来查询字符串中某一位置的汉字
'你好'.charAt(0); // "你"


// ES6 推出了includes()，startsWith()，endsWith() 来查询一个字符串是否包含在另一个字符串中
// 1. includes()
let str1 = 'see you again';
str1.includes('see') // true
str1.includes('you', 4) // true  第二个参数制定查询开始的位置
str1.includes('you', 5) // false

// 2. startsWith()
let str2 = 'it is ok';
str2.startsWith('it') // true 匹配字符串开始位置是否有查询的字符串
str2.startsWith('is', 3) // true 第二个参数制定查询开始的位置

// 3. endsWith()
let str3 = 'it is not ok';
str3.endsWith('ok') // true 匹配字符串结束位置是否有查询的字符串
str3.endsWith('is', 5) // true 第二个参数制定查询结束的位置
str3.endsWith('is', 4) // false

// ES6 推出了padStart()，padEnd()这两个自动补全字符串的函数
// 1. padStart()
'a'.padStart(3, 'a'); //"aaa"  第一个参数是字符串的总长度，第二个参数是如果字符串目前不够总长度时，需要填充的内容
'hello'.padStart(5, 'a'); //"hello" 如果当前字符串长度大于或等于总长度时，将不再填充字符串，返回原来的字符串

// 2. padEnd()
'hello'.padEnd(6, 'a'); //"helloa"