"use strict";
//Write a program that uses filter to remove all negative numbers 
//from an array of numbers
// let array1:number[]=[1,-2,3,-5,6,-7]
// let updated_array1:number[]=array1.filter((number)=>{
//     return number>0
// });
// console.log(updated_array1)
//Given an array of numbers [1, 2, 3, 4, 5], use the map method to 
//create a new array where each number is multiplied by 2.
// let array2:number[]=[1,-2,3,-5,6,-7]
//  let updated_array2:number[]=array2.map((values:number)=>{
//      return values*2
//  });
//  console.log(updated_array2)
// Given an array of strings ["apple", "banana", "cherry", "date", 
// "grape"], use the filter method to create a new array containing 
// only the fruits with more than 5 characters.
// let array3:string[]=["apple", "banana", "cherry", "date", "grape"]
// let fruit:string[]=array3.filter((frt)=>{
//     return frt.length>5
// })
// console.log(fruit)
//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map 
// and filter methods together to create a new array containing the 
// squares of even numbers.
// let arr:number[]=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arr1:number[]=arr.filter((nums:number)=>{
//     return nums%2==0
// })
// //console.log(arr1);
// let arr2:number[]=arr1.map((num1:number)=>{
//     return num1**2
// })
// console.log(arr2)
//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use 
// the map method to create a new array where each temperature is 
// converted to Fahrenheit using the formula (Celsius * 9/5) + 32
// let cel:number[]=[0, 10, 20, 30, 40]
// let upcel:number[]=cel.map((num:number)=>{
//     let ctof:number=(num*9/5)+32;
//     return ctof
// })
// console.log(upcel);
// Given an array of names ["Alice", "Bob", "Charlie", "David", 
// "Emily"], use the forEach method to log each name with an 
// exclamation mark at the end, e.g., "Alice!
// let array7:string[]=["Alice", "Bob", "Charlie", "David", "Emily"]
// array7.forEach((names:string)=>{
//     console.log(names+"!")
// })
//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and 
// filter methods together to create a new array containing the 
// doubled values of odd numbers.
let array6 = [3, 6, 9, 12, 15, 18];
let array6a = array6.filter((num3) => {
    return num3 % 2 != 0;
});
let array6b = array6a.map((num4) => {
    return num4 * 2;
});
console.log(array6b);
