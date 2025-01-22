// Ask the user for their first name and store it in the variable Fname.
var Fname = prompt("Please enter your first name:");

// Display a welcome message that includes the user's name.
alert("Hello, " + Fname + "! Welcome to the circle area calculator.");

// Create a constant piValue to store the value of Pi to 7 significant digits.
const piValue = 3.1415926;

// Ask the user to input their favorite number and store the value in a variable myFavNum.
var myFavNum = prompt("Please enter your favorite number:");

// Convert the favorite number to a numeric type, ensuring it can be used in calculations.
var radius = parseFloat(myFavNum);

// Calculate the area of a circle using the user’s favorite number as the radius.
// The formula to find the area of a circle is A = πr^2.
var myArea = piValue * radius * radius; // Area calculation

// Display the contents of each variable to the webpage in a detailed message.
alert("Hello " + Fname + ", you entered " + myFavNum + " as your favorite number. If that was the radius of a circle, the circle’s area would be " + myArea.toFixed(6) + ".");
