// Number, String, Array, Objects, Boolean

let a : number = 10; //  number 

let myname : string = "Deepak Kumar"; //  string
 
let isStudent : boolean  = false; // Boolean variable


// Type declaration object
var Person : {
    name: string;
    age:  number;
}

Person = {
    name  : "Deepak",
    age :25
 }

 // Arrays

 let fruits : string[] =  ["Apple", "Banana", "Orange", "Guava"]

//  or by generic type

let fruit : Array<string> =  ["Apple", "Banana", "Orange", "Guava"]

// Multiple var array

let cities : (string | number)[]= ["Dhanbad", "Hazaribagh", "Ranchi","Jamshedpur", 5, 8]




// Tuple type : Tuple can contain two values of different data types.

var eployee : [number, string] = [12, "Jagjit Singh"]

// Enum : enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.

enum styles {
    jeans= "Denim",
    shirt = "My shirt",
    shoes= "Ajanta"
}

// Union : allows us to use more than one data type for a variable or a function parameter

let phone  :(string | number);
phone = "Asus Zenfone";
phone = 5000;


// Any : it allows to automatically types check if user forget to write any type to var

let mobile : any = "Asusn Zenfone"

mobile = 5000
mobile = "Nokia"

let mobiles : any[] = ["John", 212, true]; 



