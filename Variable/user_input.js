/*Asking a user to enter a name in  javascript 
1.we are going to make use of the const keyword with cannot be changed when used
2.To ask a user to enter a number we make use of require on the command line;,but for the webrowser we use prompt() 
*/
const readline = require("readline");

const num1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

num1.question("what is Your name ", function (answer) {
    console.log(`Your name is ${answer}`);
    console.log("closing the interface..........")
    num1.close();
});


