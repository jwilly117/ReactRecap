
// Create an application that reads the text file from the local folder. 

// It then needs to parse the comma separated values, and ultimately console logs each elements in the file on
// Separate lines

// Your final output should just be the contents listed out line by line. 

var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(err, data) {
    if(err){
        return console.log(err);
    }

    // Break the string down by comma separation and store the contents into the output array. 
    var otput = data.split(",");

    // Loop through the newly created output array
    for(var i=0; i < output.length; i++){
        console.log(output[i]);

    }
});

