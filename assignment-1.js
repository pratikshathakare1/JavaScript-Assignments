// Assignment-1
// Create an array to hold student marks. This array will contain only numeric marks.
//  Perform operations like accessing array element, add new element into array, read element from array etc

// var studentInfo = [
//     {Name: "janvi", Marks: 50 },
//     {Name: "Ram", Marks: 70},
//     {Name: "mack", Marks: 40},
//     {Name: "sham", Marks: 30},
//     {Name: "Ritu", Marks: 20}
// ];
// console.log("Existing Array");
// for(var i = 0; i < studentInfo.length; i++)
//     {
//         console.log(`Name:${studentInfo[i].Name}, Marks:${studentInfo[i].Marks}`);
//     }
// var newStudent = {Name: "abc", Marks: 52};

// studentInfo.push(newStudent);
// console.log("\n new array");
// for(var i = 0; i < studentInfo.length; i++)
// {
//     console.log(`Name:${studentInfo[i].Name}, Marks:${studentInfo[i].Marks}`);
// }

// function getMarksByName(studentName)
// {
//     for(var i = 0; i < studentInfo.length; i++)
//         {
//             if(studentInfo[i].Name === studentName)
//                 {
//                     return studentInfo[i].Marks;
//                 }
//         }
//         return null;
// }

// var studentName = 'Ram';
// var Marks = getMarksByName(studentName);
// if(Marks!==null)
//     {
//         console.log(` \n Marks for ${studentName} ${Marks}`);
//     }
//     else{
//         console.log(`\n studentInfo ${studentName} not found.`);
//     }

     
    
var studentInfo = [
                    {Name: "janvi"},
                    {Name: "Ram"},
                    {Name: "mack"},
                    {Name: "sham"},
                    {Name: "Ritu"}
                ];
                
for(var i = 0; i < studentInfo.length; i++)
    {
        console.log(`Name:${studentInfo[i].Name}`);
        
     }
function addStudentAtBeginning(Name)
{
    var newStudent = {Name: Name};
    var newLength = studentInfo.length + 1;
    var newStudents = new Array(newLength);
     newStudents[0] = newStudent;
    for(var i = 0;i < studentInfo.length; i++)
        {
            newStudents[i + 1]= studentInfo[i];
        }
        studentInfo = newStudents[i];
}
 addStudentAtBeginning('gita');

 console.log("\nStudents after adding new students:")
    for(var i = 0; i<studentInfo.length; i++)
        {
            console.log(`Name:${studentInfo[i].Name}`); 
        } 
 
        
