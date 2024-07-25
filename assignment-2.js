// Assignment-2

// 1) Create student name array and print all student names using for loop.
// var studentInfo = [
//         {Name: "janvi"},
//         {Name: "Ram"},
//         {Name: "mack"},
//         {Name: "sham"},
//         {Name: "Ritu"}
//     ];
//     for(var i = 0; i < studentInfo.length; i++)
//         {
//             console.log(`Name:${studentInfo[i].Name}`);
            
//         }

// 2) write a function to add student name at begginning of Array,without using built in functions.
// method-1
// var arr = [
//     {Name: "jack"},
//     {Name: "mack"},
//     {Name: "julie"},
//     {Name: "momo"}
// ];
// var newIndex = 0;
// var newValue = "Name: riya";

// for(var i = arr.length; i > newIndex; i--)
//     {
//         arr[i] = arr[i -1];
//     }

// arr[newIndex] = newValue;
// console.log(arr);

// method-2
function addElementAtBeginning(arr, element)
{
    for(var i = arr.length; i > 0; i--)
        {
            arr[i] = arr[i - 1];
        }
        arr[0] = element;
        
        return arr;
}
var list = [
        {Name: "jack"},
        {Name: "mack"},
        {Name: "julie"},
        {Name: "momo"}
    ];
var newString = "riya";

let modifiedArray = addElementAtBeginning(list, newString);

console.log(modifiedArray);

// 3) write a function to delete a starting element of an Array.
// var studentInfo = [
//                 {Name: "janvi"},
//                 {Name: "Ram"},
//                 {Name: "mack"},
//                 {Name: "sham"},
//                 {Name: "Ritu"}
//             ];
//     studentInfo.shift();
//     console.log(studentInfo);

// 4) Write a function to add element at end of the array.
// var studentInfo = [
//                     {Name: "janvi"},
//                     {Name: "Ram"},
//                     {Name: "mack"},
//                     {Name: "sham"},
//                     {Name: "Ritu"}
//                 ];
//         studentInfo.push("Name: gita");
//         console.log(studentInfo);