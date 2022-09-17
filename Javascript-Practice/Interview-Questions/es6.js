/*****  Var , let , const *****/


// var declarations are globally scoped or function/locally scoped.

// A block is a chunk of code bounded by {}. Anything within curly braces is a block.

// const are blocked scoped can't be updated or re-rendered




/***** Call, bind & Apply *****/

// Call calls the function with (this) context as first parameter and then function parameters if exist are passed one by one and returns the value of execution.

// var obj1 = {
//     name:"Manti Devi"
// }

// var details = function(age,add){
//     return `${this.name} her age is ${age} lives in ${add}`
// }

// console.log(details.call(obj1, 45, 'Loyabad'))


// apply calls the function and takes parameters as array.


// var obj1 = {
//     name:"Manti Devi"
// }

// var details = function(age,add){
//     return `${this.name} her age is ${age} lives in ${add}`
// }

// console.log(details.apply(obj1, [45, 'Loyabad', 'Hello']))


// bind create a new function with a given this value, and returns that function without executing it.


// var obj = {name:"Manti"};

// var greeting = function(a,b,c){
//     return "Welcome "+this.name+" to "+a+" "+b+" in "+c;
// };

// var details = greeting.bind(obj); 

// // calling details()
// console.log(details("Loyabad","Dhanbad","JH")); 






/***** Callback, Asyc-Await & Promises *****/

// Call back : Why ? --> So Js runs code sequentially in top-down order. However, 
//there are some cases that code runs (or must run) after something else happens and also not sequentially. 
//This is called asynchronous programming.


// function message(){
//     console.log('Hey I am Deepak working as Full Stack Developer')
// }

// setTimeout(message, 3000)




