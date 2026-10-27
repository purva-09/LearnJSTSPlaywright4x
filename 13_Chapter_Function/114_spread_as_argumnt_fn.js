function add(a,b,c){
    return a+b+c;
}

let num = [1,4,6,8];
console.log(add(...num));

//-----------
function hasError(...codes){
  return codes.some(c=> c >= 400);
}

let responseCodes = [200,201,204];
let responseCodes2 = [200,201,204,404,500];

console.log(hasError(...responseCodes));
console.log(hasError(...responseCodes2));