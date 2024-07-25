// 1) to print 5 to 1 numbers.
    //  for (let i = 5; i >= 1; i--)
    //  {
    // console.log(i); 
    // }
//output: 5 4 3 2 1


// 2) to print 1 to 5
    //  for(let i = 1; i <= 5; i++)
    // {
    //     console.log(i);
    // }
// output: 1 2 3 4 5 


// 3) to print 0 to 10 
    //  for(let i = 0; i <= 10; i++)
    // {
    //     console.log(i);
    // }
// output: 0 1 2 3 4 5 6 7 8 9 10


// 4) to print star pyramid
// let n = 4; 
// for (let i = 1; i <= n; i++)
//      { 
// 	let str = "* "; 
// 	let space = ' '; 
// 	console.log(space.repeat((n - i)) + str.repeat(i * 1 - 1)); 
//     }
// output:    *
//           * *
//          * * *


// 5) to print star pyramid
// var totalNumberofRows = 5;
//     var output = '';
//     var sp=10;
//     var k;
    
//     for (var i = totalNumberofRows; i >=1 ; i--) {
//         for(k=1;k<=sp;k++)
//             output+=''+' ';
//         for (var j = 1; j <= i; j++) {
//             output += '*' + '    ';
//         }
//         console.log(output);
//         output = '';
//         sp=sp+2;
//     }
// output:       * * * * *
//                * * * * 
//                 * * * 
//                  * *
//                   * 


// 6) to print star pyramid
// var totalNumberofRows = 5;
//     var output = '';
//     var sp=10;
//     var k;
    
//     for (var i = 1 ; i <=totalNumberofRows ; i++) {
//         for(k=1;k<=sp;k++)
//             output+=''+' ';
//         for (var j = 1; j <= i; j++) {
//             output += '*' + '    ';
//         }
//         console.log(output);
//         output = '';
//         sp=sp-2;
//     }
// output:           *
//                  * *
//                 * * *
//                * * * *
//               * * * * *


// 7) to print 1 to 10 odd numbers.

// let no=1;
// for(  ;no<20;  )
//     {
//         console.log("%d",no);
//         no=no+2;
//     }
// output: 1 3 5 7 9 11 13 15 17 19


// 2)Write a program to filter only even element from the given array.

// ex: Input: array = [2,3,5,6,9,10,12]
//       Output: array =[2,6,10,12]

    // let numbers = [2,3,5,6,9,10,12];

    // let even = [];
    // for(let i = 0; i < numbers.length; i++) 
    //     {
    //        if (numbers[i] % 2 == 0)
    //        even.push(numbers[i]);
    //     }
    //     console.log(`Even numbers in an array are:${even}`);

// output: Even numbers in an array are: 2,6,10,12


