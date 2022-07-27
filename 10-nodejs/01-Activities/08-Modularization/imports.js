
// Now in this file I will import the resources used in the other file. 

var hr = require("./index.js");


console.log("Now to display the resources from the other JS file")
console.log(hr);

// try to reference within the require

var test = hr.HumanResources.owner;
console.log(test);


// So on this, when you export, probably just name it the same thing so you dont have to know which is the local or foreign variable. 
