/***** JavaScript Interview Questions *****/

/*****  1. Reverse the string using for loop *****/

// function reverseStr(str){

//     let reversed = ""
//     for (let i = str.length-1; i>=0; i--) {
//         reversed = reversed + str[i]        
//     }
//     return reversed
// }

// console.log(reverseStr('hello'))


/*****  2. Find 2nd larget number in array in javascript *****/


// function largets(arr,size){  
//     var newarr = arr.sort((a,b) =>  a - b)
//     console.log(newarr)
//     var arr_length = newarr.length
//     console.log(arr_length)
    
//     var sec_largest = newarr[arr_length - 2];
//     console.log( sec_largest)
// }
// console.log(largets([4,0,1,2], 4))


/***** 3. Remove duplicate from array *****/
// function duplicate(arr){
//     var newarr = [] 
//     var arr_length = arr.length

//     for (let i = 0; i < arr_length; i++) {
//         if(newarr.indexOf(arr[i]) === -1){
//             newarr.push(arr[i])
//         }
        
//     }
//     return newarr
// }

// console.log(duplicate([34,76,98,100,98,34,12,5,7]))



/***** 4. Finding Prime numbers *****/

// function primeNo(num){
//     if(num ===1) return 'Not a prime no'
//     if(num === 2) return 2;
//     if(num> 1){
//         for (let i = 0; i < num; i++) {
//            if (num % i == 0) {
//                 return 'Not a prime no' 
//            }
            
//         }
//     }
//     else{
//          return `${num} is a prime no`
//     }

// }


/***** 5. Finding Fibonacci series  *****/

// function fibonacci(num){
//     if(num === 0) return 0
//     if(num === 1) return 1

//     var n1 = 0
//     var n2 = 1
//     var next

//     for (let i = 1; i < num; i++){
        
//           next = n1 + n2
//           n2 = n1
//           n2 = next
      
//     }

//     return num
  
// }



/***** 6. Program to Find HCF or GCD *****/
// 36 = 2 * 2 * 3 * 3
// 60 = 2 * 2 * 3 * 5

// Result = 2 * 2 * 3 = 12



// function hcf(a,b){
//    if(a === 0) return b
//    if(b === 0) return a

//    if(a === b) return a
//    if (a > b)
//    return hcf(a-b, b);
// return hcf(a, b-a);

// }

// console.log(hcf(36,60))

/****** 7. Program to find no of character in a string  *****/

// function char_Occurence(str){
//     if(str.length === 0) return 'Invalid string'

//     for (let i = 0; i < str.length; i++) {
        
//         let count = 0

//         for (let j = 0; j < str.length; j++) {
//             if(str[i] == str[j] && i > j){
//                 break
//             }
//             if(str[i] == str[j]){
//                 count++;
//             }
            
//         }
//         if( count > 0)
//         console.log(`${str[i]} occurs ${count} times`);
        
//     }
// }

// let test_str = "gfghello";
// char_Occurence( test_str);



/****** 8. Program to Remove Specific Item From an Array  *****/

// function removeSpecific(arr,n){
//     let index = arr.indexOf(n)

//     console.log(index)

//     if(index > -1){
//         arr.splice(index , 1)
//     }

//     return arr
// }
// console.log(removeSpecific([1,2,3,5,6], 2))


/****** 9. Program to  Check for Palindromes  *****/
// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           return false;
//       }
//     }
//     return true;
//    }
// var p = palindrome("madam");
// console.log(p)


/****** 10. Program to  Check for Palindromes  *****/

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }
// const l = findLongestWord("My name is Deepak Kumar Chouhan");
// console.log(l)



/****** 11. Program to find largest number in an array   *****/

 
// function largestOfFour(mainArray) {
//     return mainArray.map(function(subArray) {
//       return Math.max.apply(null, subArray);
//     });
//   }
// var l = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// console.log('Largest Number is :',l)



// Intersection of two arrays and find that numbers


/***** Given a string array words, return the maximum value of length(word[i]) * length(word[j]) 
//where the two words do not share common letters. 
//If no such two words exist, return 0. *****/ 


// Example 1:

// Input: words = [“abcw”,”baz”,”foo”,”bar”,”xtfn”,”abcdef”]

// Output: 16

// Explanation: The two words can be “abcw”, “xtfn”.




/***** *****/

// Left triangle pattern in javascript


// function leftPattern(num){

//     var str = "";
   
//      for (let i = 1; i <=num; i++) {
//         for (let j = 0; j < i; j++) {
//             str += '*'
            
//         }
//         str += "\n";
        
//      }
// }

// console.log(leftPattern(4));




