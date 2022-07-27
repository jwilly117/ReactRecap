// Core node package for reading and writing files
// This is included in the core files for Node, does not need to be installed through npm
var fs = require("fs");

// This block of code will create a file called "movies.txt"
// It will then print "Inception, Die hard, something else"
fs.writeFile("movies.txt", "Inception, Die Hard", function(err){
    // If the code experiences any errors it will log the error to thhe console. 
    if(err){
        return console.log(err);
    }

    // Otherwise, it will print "movies.txt was updated!"
    console.log("Moview.txt was updated");
    
})