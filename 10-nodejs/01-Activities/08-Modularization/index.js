
// This is called modularization. It means basically including other javascript applications within your own. 
// You can reference a file from another location. Probably because URL

var stuffINeed = require("./ess.js")


// you can require modules from any other file, or node modules. Get it now?

// now I will write a list of people who work here and then export it to use in another file 

var employees = {
    owner: "Dwain",
    COO: "Jason",
    NIM: "Joe F",
    TerritoryManager: ["Butch", "Selph", "Joe"]
}

module.exports = {
    HumanResources: employees
}

