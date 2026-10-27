function getStatus(code){
if(code>=200 && code<=300){
    return 'sucess';
}else
if(code>=300 && code<=400){
    return "client error";

}else if(code>=400 && code<=500){
    return "server error";
}else{
    return "unknown";
}
}

console.log(getStatus(201));
console.log(getStatus(404));
console.log(getStatus(503));