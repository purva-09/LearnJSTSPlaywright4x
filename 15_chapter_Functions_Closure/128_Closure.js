function startBrowser(){
    let name = 'edge';
console.log("first", name);
    function installBrowser(){
        console.log(name);
            }
            return installBrowser;
            
}
startBrowser();//calling main function
const runTc= startBrowser();
runTc();//calling both function
