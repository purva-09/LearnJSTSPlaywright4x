// var is actual traitor - cheator
// let is sincere person
// const is just const which will not change.

// let - block of code Scoped

let a = 10;//global scope
console.log(a);//10
function printHello(){
    let a = 20;
    console.log("Hi hello...");
    console.log(a);//20
    if(true){
        let a=30;//local scope
        console.log(a);//30
    }
    console.log("let =>",a);//20
   
}
console.log(a);//10

printHello();