let results = ["pass", "fail", "pass", "error", "fail"];

results.indexOf("fail"); //1
results.indexOf("skip");  // -1

// lastIndexOf — searches from the end
console.log(results.lastIndexOf("fail"));//4

// includes — returns boolean
results.includes("error"); // true