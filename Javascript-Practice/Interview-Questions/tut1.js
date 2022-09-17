/*  JavaScript OOPS */


// Object
// Classes
// Encapsulation  : The process of wrapping property and function within a single unit is known as encapsulation
// Inheritance

// Objects creating
// var deepak = {
//     name: "Deepak Chouhan",
//     age : 25,

//     getFunc:  function(){
//       return `My name is ${this.name} and I am ${this.age} years old`
//     }
// }
// console.log(deepak.getFunc())



// Creating Class and Objects
// class person {
//     constructor(fname, lname,age){
//         this.fname = fname
//         this.lname = lname
//         this.age = age
//     }

//     getDetils() {
//         return (`My Grandmother name is ${this.fname} ${this.lname} and her age is ${this.age}`)
//     }
// }


// var d =new person('Nagia Devi', 'Chouhan', 55)
// console.log(d.getDetils())



// Encapsulation creating


// class person{
// 	constructor(name,id){
// 		this.name = name;
// 		this.id = id;
// 	}
// 	add_Address(add){
// 		this.add = add;
// 	}
// 	getDetails(){
// 		console.log(`Name is ${this.name},address is  ${this.add}`);
// 	}
// }

// let person1 = new person('Deepak',12);
// person1.add_Address('Dhanbad');
// person1.getDetails();


// Inheritance creating


// class Animal {
//     constructor(name, sound){
//         this.name = name
//         this.sound = sound
//     }


// }

// class Tiger extends Animal {
//     constructor(name,sound,live){
//         super(name)
//         this.sound = sound
//         this.live = live
//     }
// }

// var t = new Tiger('Tiger', 'Roar', 'Shed')
// console.log(t)



