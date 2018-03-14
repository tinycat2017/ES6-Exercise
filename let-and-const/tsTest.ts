interface NumberArr {
    [index: number]: any;
}

let numArr: NumberArr = [1,2,3,"233",false,{a:1}];

let arr: Array<any> = [1,'233',false];

let arr2: any[] = [1,2,3,'2333'];

let test:(x:number,y:number)=>boolean = function (x:number,y:number):boolean{
    return (x+y) > 0;
}
test(1,2);

interface MyFuc {
    (source:string,target:string): boolean
}

let myfunc1:MyFuc;
myfunc1 = function(source){
    return !source;
}

