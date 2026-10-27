//Type 1 - No Param/Argument , No return-> final return undefined

//fn defind
function greet(){
    console.log("hello....");
}

let msg = greet();
console.log(msg);//undefined
//fn calling

greet();
greet();

function openBrowser(){
    console.log("Open Browser");
}

openBrowser();