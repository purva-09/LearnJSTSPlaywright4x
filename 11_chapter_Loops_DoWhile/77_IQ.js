// let count = 0;
// for (let i = 5; i < 5; i++) {
//   count++;  
// }
// console.log(count);
let a=5; let b=5; let c=5;
if (a === b && b === c && c === a) {
    console.log("Equilateral");
} else if(a===b || b===c||c===a) {
    console.log("Isosceles");
} else {
    console.log("Scalene");
}