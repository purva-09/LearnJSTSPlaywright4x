// Nested Ternary
// Multiple Conditions
// age = 26
// age > 18 -> Go Goa, age > 25 -> Drink

let age = 26;

let is_pramod_enjoy = age>18 ?(age>25 ? "Goa & drink":"No Drink, Only Goa") :"no goa";
console.log(`Pramod can Enjoy ${is_pramod_enjoy}`);