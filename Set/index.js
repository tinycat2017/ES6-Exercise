//this is Set exercise

/*** 1. Set ***/
//Set 与数组类似，但是Set的成员值都是唯一的，不能有重复值

let s1 = new Set([1,2,2,3]);
s1.add(3);
s1.add('3');
console.log(s1); //{1, 2, 3, "3"}   在 Set内部对于重复元素的比较是用与===类似的严格相等来决定是否是重复的值

// set 能够被 spread 成参数列表
let s2 = new Set([1,2,3]);
[...s2] // [1, 2, 3]

// 对数组中的元素去重
let arr = [1,2,2,3,4,4,5];
let s3 = new Set(arr);
arr = [...s3];// [1, 2, 3, 4, 5]

// 需要注意的是，Set 的对于 NaN 值的比较判断是不同于===的，两个 NaN 相等的
let s4 = new Set();
s4.add(NaN);
s4.add(NaN);
s4; //Set {NaN}

// 但是判断两个空对象却是不相等的
let s4 = new Set();
s4.add({});
s4.add({});
s4; // Set(2) {{}, {}}

// set类型有四个操作方法
// 1. add
let s4 = new Set([1]);
s4.add(2);
s4 // Set(2) {1, 2}

// 2. delete
s4.delete(1); // true
s4 //Set(1) {2}

// 3. has
s4.has(3) // false

// 4. clear
s4.clear();
s4 // Set(0) {}

// set 类型有四个遍历方法
// 1.keys()
let s4 = new Set();
s4.add('hi');
s4.add('you');
for (let key of s4.keys()) {
    console.log(key);
}
// "hi"
// "you"

// 2.values()
for (let value of s4.values()) {
    console.log(value);
}
// "hi"
// "you"

// 3.entires()
for (let entry of s4.entries()) {
    console.log(entry);
}
//["hi", "hi"]
//["you", "you"]

// 4.forEach()
s4.forEach((element,key) => {
    console.log(element);
});
// "hi"
// "you"

// 可以利用 Set 这种数据结构的特性来进行求并集，交集，差集
let s1 = new Set([1,2,3]);
let s2 = new Set([2,3,5]);

let union = new Set([...s1,...s2]); // Set(4) {1, 2, 3, 5} 

let intersect = new Set([...s1].filter(x => s2.has(x))); //Set(2) {2, 3} 

let difference = new Set([...s1].filter(x => !s2.has(x))); //Set(1) {1}

// 如果想要在遍历 set 结构的时候同时改变 set 里的数据，可采用两种方法
// 1. [...set].map
let s1 = new Set([1,2,3]);
s1 = new Set([...s1].map(x => x*2));//Set(3) {2, 4, 6}

// 2. Array.from 
let s1 = new Set([1,2,3]);
s1 = new Set(Array.from(s1,x => x*2));//Set(3) {2, 4, 6}

/*** 1. Set ***/

/*** 2. WeakSet ***/

// 与 Set 类似，不过其成员必须是对象，不能为其他值
let ws = new WeakSet();
ws.add(1); //TypeError: Invalid value used in weak set
ws.add(Symbol('a')); //TypeError: Invalid value used in weak set
ws.add({a:1});

//  WeakSet里的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，如果其他对象不再引用该对象，则该对象会被回收释放
// 因此在 WeakSet 里的对象引用都是不确定的，随时可能会消失的，所以不能对 WeakSet 进行遍历操作
// 任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数
let arr = [[1,2],[3,4]];
let ws = new WeakSet(arr); //WeakSet {[1, 2], [3, 4]}

let arr = [1,2,3,4];
let ws = new WeakSet(arr); //TypeError: Invalid value used in weak set

// WeakSet 的操作方法有 has,add,delete
// WeakSet 没有 size 属性，也不能对其进行遍历，包括 forEach 这样的遍历
// WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏

/*** 2. WeakSet ***/





