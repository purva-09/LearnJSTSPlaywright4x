// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

//includes()

console.log(url.includes("staging"));//true
console.log(url.includes('production'));//false

//startWith endWith
console.log(url.startsWith('https'));//true
console.log(url.startsWith("http"));//true
console.log(url.endsWith(true));////true
console.log(url.endsWith('retry'));//false

//indexOf lastIndexof

console.log(url.indexOf('a'));//10
console.log(url.lastIndexOf("a"));//24
console.log(url.indexOf('api'));//24

