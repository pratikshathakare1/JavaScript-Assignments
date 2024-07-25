// Assignment- 3
// 1) Write a program to return boolean array, if element is even, then value should be true else false
//       ex: Input: array = [2,3,5,6,9,10,12]

//             Output: array = [true, false, false, true, false, true, true]

//method-1
// function isEven(num) {
//     return num % 2 === 0;
// }
// function evenBooleanArray(arr) {
//     return arr.map(x => isEven(x));
// }
// const inputArray = [2, 3, 5, 6, 9, 10, 12];
// const outputArray = evenBooleanArray(inputArray);
// console.log(outputArray);

//method-2
// function isEvenArray(arr)
// {
//     let boolArray = [];
//      for(let i = 0; i < arr.length; i++)
//         {
//             if(arr[i] % 2 === 0)
//                 {
//                     boolArray.push(true);
//                 }
//                 else{
//                     boolArray.push(false);
//                 }
//         } 
//         return boolArray;
// }
// let inputArray = [2,3,5,6,9,10,12];
// let outputArray = isEvenArray(inputArray);
// console.log(outputArray);



// 2)Write a program to filter only even element from the given array.
// ex: Input: array = [2,3,5,6,9,10,12]
// Output: array =[2,6,10,12]

//method-1
// function filterEvenElements(arr) {
//     return arr.filter(num => num % 2 === 0);
// }
// const inputArray = [2, 3, 5, 6, 9, 10, 12];
// const outputArray = filterEvenElements(inputArray);
// console.log(outputArray);

//method-2
// function filterEvenElements(arr)
// {
//     let result = [];
    
//     for(let i = 0; i < arr.length; i++)
//         {
//             if(arr[i] % 2 === 0)
//                 {
//                     result.push(arr[i]);
//                 }
//         }
//         return result;
// }

// let inputArray = [2,3,5,6,9,10,12];
// let outputArray = filterEvenElements(inputArray);
// console.log(outputArray);
