function greet(name){
    return `hello ${name}`;
}

const greet1=function(name){
   return `hello ${name}`;
}

//arrow fn
const greet2 = (name)=>`hello ${name}`;
// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

console.log(greet('Purva'));
console.log(greet1('Purva1'));
console.log(greet2('Purva2'));
