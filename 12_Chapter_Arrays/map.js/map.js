const user = new Map();
user.set("purva",34);
user.set("test1",33);
user.set("warke",23);
let text="";
user.forEach(function(value,key){
text = text+ ' '+key + ' = '+ value;

})
console.log(text)
let text2='';
for(const x of user.entries()){
    text2 = text2+x;
}

console.log(text2)
user.re
