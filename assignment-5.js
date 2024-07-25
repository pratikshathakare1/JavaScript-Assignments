// Assignment-5
// 1) Write an adder program, which return an add function, everytime you call it it add new value to existing addition. 

// function adder() {
//     let sum = 0;
    
//     function add(value) {
//         sum += value; 
//         return sum; 
//     }
    
//     return add; 
// }
// const add = adder(5);
// console.log(add(5)); 
// console.log(add(1)); 
// console.log(add(10)); 


function adder(base){
    let sum = base;
    return function add(value){
        sum +=value;
        return sum;
    }
}
let add=adder(5);
console.log(add(10));
console.log(add(5));