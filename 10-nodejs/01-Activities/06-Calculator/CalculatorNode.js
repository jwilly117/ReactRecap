

// Create a node 

// create a cmd line node application that takes in parameters and compares them

var input1 = parseFloat(process.argv[3]);
var input2 = parseFloat(process.argv[4]);

var operator = process.argv[2];

switch(operator){
    case "add":
        console.log(input1 + input2);
        break;
    case "subtract":
        console.log(input1 - input2);
        break;
    case "multiply":
        console.log(input1 * input2);
        break;
    case "divide":
        console.log(input1 / input2);
        break;
    default:
        console.log(console.log("invalid input"));
}

