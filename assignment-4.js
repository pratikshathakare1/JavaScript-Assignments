// Assifnment-4
// 1)Write a program to find all unique characters from a given string

// Input: givenString = "thisisrandomstring"
// Output: uniqueCharInStrig = "thisrandomg

// function findUniqueCharacters(givenString) {
//     let uniqueChars = '';
//     let seenChars = []; 
    
//     for (let i = 0; i < givenString.length; i++)
//          {
//             let currentChar = givenString[i];
//             if (seenChars.indexOf(currentChar) === -1) 
//             {
//                 uniqueChars += currentChar;
//                 seenChars.push(currentChar);
//             }
//           }
    
//     return uniqueChars;
// }
// let givenString = "thisisrandomstring";
// let uniqueCharInString = findUniqueCharacters(givenString);

// console.log(uniqueCharInString); 


// 2)Write a program to create half of the string in uppercase and other half in lowercase. 
// Input: givenString = "Pratiksha"
// Output: resutl= "PRATIksha"

// function convertHalfCase(givenString) {
//     let result = '';
//     let halfLength = Math.ceil(givenString.length / 2);  

//     for (let i = 0; i < givenString.length; i++)
//     {
//         if (i < halfLength)
//         {
//             result += givenString[i].toUpperCase();
//         } 
//         else
//         {
//             result += givenString[i].toLowerCase();
//         }
//     }

//     return result;
// }
// let givenString = "Pratiksha";
// let result = convertHalfCase(givenString);

// console.log( result); 
