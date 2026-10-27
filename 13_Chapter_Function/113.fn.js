//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

function name1(){
    console.log("hi");
}
name1();

(function()
{
    console.log("annonymous function");
})();

(function(){
    console.log("Staging");
})();

(()=>{
    console.log("setup complete");
})();