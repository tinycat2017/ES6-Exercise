//this is Map exercise

// Map 数据类似于字典，都是键值对
let m = new Map([[1,2],[3,4]]);//Map(2) {1 => 2, 3 => 4}

// 与传统的 Object 不同的是，Object 的键名只能是字符串类型的，就算以一个 Object 做键名，这个 Object 也会被自动转化为字符串
// 而在 Map 中则能实现这个技术
let obj = {a:1}; 
let m = new Map();
m.set(obj,'hi'); //Map(1) {object => "hi"}
m.has(obj); // true
m.keys(); // [obj]

// 不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数
let m = new Map(new Set([['a',1],['b',2]])); //Map(2) {"a" => 1, "b" => 2}

// 如果读取一个未知的键，则返回undefined
let m = new Map(new Set([['a',1],['b',2]]));
m.get('c');// undefined

// Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键
// 这样就解决同名属性冲突的问题
let obj1 = {a:1};
let obj2 = {a:1};
let m = new Map();
m.set(obj1,'hi');
m.set(obj2,'world');
m.get(obj1); //"hi"
m.get(obj2); //"world"

// 需要注意的是，如果 Map 里的属性名是简单数据类型的话，Map 就严格比较两个属性名，如果相等，则视为一个键

/*** Map 数据的操作方法 ***/
// 1. set()
let obj1 = {a:1};
let m = new Map();
m.set(obj1,'hi');

// 2. get()
m.get(obj1); //"hi"

// 3. has()
m.has(obj1) // true

// 4. delete()
m.delete(obj1); //true
m // Map(0) {}

// 5. clear()
m.clear(); //Map(0) {}
/*** Map 数据的操作方法 ***/

/*** Map 数据的遍历方法 ***/
// 1. keys()
let obj1 = {a:1};
let obj2 = {b:2};
let m = new Map();
m.set(obj1,'hi');
m.set(obj2,'world');

for (let key of m.keys()) {
    console.log(key);
}
// {a: 1}
// {b: 2}

// 2. values()
for (let value of m.values()) {
    console.log(value);
}
// hi
// world

// 3. entries()
for (let item of m.entries()) {
    console.log(item);
}
// [{a:1}, "hi"]
// [{b:2}, "world"]

// 4. forEach()
m.forEach((value,key,map) => {
    console.log(value,key);
})
// hi {a: 1}
// world {a: 1}

/*** Map 数据的遍历方法 ***/

/*** WeakMap ***/
// 与 Map 类似，区别在于:1.WeakMap的键名必须是对象，2.WeakMap 没有 size 属性和遍历的方法，比如 keys()，values()，entires()等
let wm = new WeakMap();
wm.set(1,'a'); //TypeError: Invalid value used as weak map key
wm.set(Symbol('a'),'b'); //TypeError: Invalid value used as weak map key
wm.set({a:1},'c');

// 在 WeakMap 里，对键名的引用是弱引用，对键值的引用仍然是正常的引用
let wm = new WeakMap();
let key = {};
let value = {a:1};

wm.set(key,value);
wm.get(key); //{a: 1}
value = null;
wm.get(key); //{a: 1}

/*** WeakMap ***/