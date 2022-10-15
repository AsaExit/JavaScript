"use strict"

var colorSelected = document.getElementById('colorSelected');
var result = document.getElementById('result');
var myForm = document.getElementById('myForm');
var textToColor = document.getElementById('textToColor');

colorSelected.addEventListener('change',updateResult);
myForm.addEventListener('submit',(event)=> changeTextColor(event));

function updateResult(){
	console.log(colorSelected);
	console.log("value is: ",colorSelected.value);
	result.style.backgroundColor = colorSelected.value;
}

function changeTextColor(event){
	console.log(event);
	event.preventDefault();
	textToColor.style.color = colorSelected.value;
}

// const myNameA = {
// 	firstName: "bunny", 
// 	title: "dr.", 
// 	fullName: myObj.title + myObj.firstName
// };
// // Uncaught ReferenceError: Cannot access 'myName' before initialization

// const myName2  = new function() {
// 	this.firstName = "bunny";
// 	this.title = "dr.";
// 	this.fullname = `${this.title} ${this.firstName}`;
// }(); // the () is to avoid linting warnings

// console.log(myName2);
// {firstName: "bunny", title: "dr.", fullname: "dr. bunny"}

// const myName = {
// 	firstName: "bunny", 
// 	title: "dr."
// };

// myName.fullname = `${myName.title} ${myName.firstName}`;

// console.log(myName);
// //{firstName: "bunny", title: "dr.", fullname: "dr. bunny"}
// const obj0 = {
//   log: ['a', 'b', 'c'],
//   get latest() {
//     return this.log[this.log.length - 3];
//   }
// };

// console.log(obj0.latest);
// // expected output: "c"
// //{ get prop() { /* … */ } }
// //{ get [expression]() { /* … */ } }


// const obj1 = {
//   log: ['example','test'],
//   get latest() {
//     if (this.log.length === 0) return undefined;
//     return this.log[this.log.length - 1];
//   }
// }
// console.log(obj1.latest); // "test"

// //delete obj.latest;


// const o = {a: 0};

// Object.defineProperty(o, 'b', { get() { return this.a + 1; } });

// console.log(o.b) // Runs the getter, which yields a + 1 (which is 1)


// const expr = 'foo';

// const obj = {
//   get [expr]() { return 'bar'; }
// };

// console.log(obj.foo); // "bar"


// class MyConstants {
//   static get foo() {
//     return 'foo';
//   }
// }

// console.log(MyConstants.foo); // 'foo'
// MyConstants.foo = 'bar';
// console.log(MyConstants.foo); // 'foo', a static getter's value cannot be changed

// class Example {
//   get hello() {
//     return 'world';
//   }
// }

// const obj3 = new Example();
// console.log(obj3.hello);
// // "world"

// console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));
// // undefined

// console.log(
//   Object.getOwnPropertyDescriptor(
//     Object.getPrototypeOf(obj), 'hello'
//   )
// );
// // { configurable: true, enumerable: false, get: function get hello() { return 'world'; }, set: undefined }

