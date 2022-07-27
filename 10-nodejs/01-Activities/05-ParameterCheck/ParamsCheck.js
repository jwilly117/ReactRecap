
// Command line node application that takes in two parameters and outputs wheter they are equal or not

// Take in two variables assigned to parseFloat arguments

var input1 = parseFloat(process.argv[2]);

var input2 = parseFloat(process.argv[3]);

if(input1 == input2){
    console.log("Equal arguments");
} else console.log("These are not equal");

// Test