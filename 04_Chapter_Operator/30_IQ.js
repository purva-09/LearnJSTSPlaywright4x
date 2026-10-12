let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";//false
console.log(baseUrl);//https://staging-api.example.com