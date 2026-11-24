function showmyfunction(){
    console.log("hello");
}


var b=30;
var b=40;
//in javascript we can redeclare a variable using var and reassign the value
console.log(b);
//by using let we can reassign the value but we can't redeclare

let a=30;
a=50;

console.log(a);
//we can't able to redeclare or reassign the value

const c=30;
console.log(c);

//Datatypes in JS
//primitives:number,string,boolean,undefine,null,symbol,bigint
//nonprimitives:object,array,function

//1.number
let num1=10;
let num2=20;

console.log(typeof num1);


//2.string
let str1="hello";
let str2='world';
let str3=`hello world`;

console.log(typeof str1);

//3.boolean
let bool1=true;
let bool2=false;

console.log(typeof bool1);

//4.undefined
let und;
console.log(typeof und);

//5.null
let n=null;
n=30;
console.log(typeof n);

let isvalid=null;
let age=27;
if(age>18){
    isvalid=true;
}
console.log(typeof isvalid);

//6.symbol
let sym1=Symbol("hello");
console.log(typeof sym1);

//7.bigint
let big1=BigInt(1234567890123456789012345678901234567890);
console.log(typeof big1);

//nonprimitives:object,array,function
//1.object
let obj={
    name:"John",
    age:30,
    city:"New York",
    isMarried:true,
    contry:"USA",
    address:{
        street:"5th Avenue",
        zip:10001
    }
};
console.log(obj);
console.log(typeof obj);

//creating an array
//2.Non primitive array
//2 ways to create an array
//first way
let arr=[1,2,3,4,5];
//second way
let arr1=new Array(1,2,3,4,5);
console.log(arr);


//built-in methods of array

//1.push() method
//adds one or more elements to the end of an array and returns the new length of the array.

//2.unshift() method
//adds one or more elements to the beginning of an array and returns the new length of the array.

//3.pop() method
//removes the last element from an array and returns that element.

arr1.push(10);
arr1.unshift(0);
console.log(arr1);

arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);

//4.includes() method
//determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(arr1.includes(3));
console.log(arr1.includes(10));


//5.indexOf() method
//returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(arr1.indexOf(3));

//6.slice() method
//returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let slicedArr=arr1.slice(1,4);
console.log(slicedArr);

//FUNCTIONS
function name(){
    console.log("hello");
}

name();
name();
name();

function add(a,b){
    return a+b;
}

let result=add(10,20);
console.log(result);

function greet(name){
    return "Hello "+name;

}

let greetresult=greet("John");
console.log(greetresult);

//arrow function
const multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(10,20));

const greetarrow=(name)=>{
    return "Hello "+name;
}

let greetarrowresult=greetarrow("John");
console.log(greetarrowresult);

//callback function
function greetcallback(name,callback){
    console.log("Hello "+name);
    callback();
}

function callbackfunction(){
    console.log("This is a callback function");
}

greetcallback("John",callbackfunction);


//Asynchronous JavaScript
//asynchronous JavaScript is a programming paradigm that allows for non-blocking operations,
//  enabling tasks to run concurrently without waiting for each other to complete.
//  This is particularly useful for tasks that involve I/O operations,
//  such as fetching data from an API or reading files, where waiting for the operation
//  to complete would block the execution of other code.

//example of asynchronous JavaScript using setTimeout
console.log("Start");
setTimeout(()=>{
    console.log("This is an asynchronous operation");
},2000);

console.log("End");

