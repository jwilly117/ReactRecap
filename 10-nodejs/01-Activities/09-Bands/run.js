
// import the index.js exports
var bands = require("./index.js");

console.log(bands);

for(var key in bands){
    console.log("This works " + bands[key]);
}