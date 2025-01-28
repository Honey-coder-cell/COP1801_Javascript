// Task 1: For Loop for Odd and Even Numbers
let loopResults = "";
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        loopResults += `Count ${i} is even<br>`;
    } else {
        loopResults += `Count ${i} is odd<br>`;
    }
}
document.getElementById("loopOutput").innerHTML = loopResults;

// Task 2: Do While Loop with User Input
let myNum = parseInt(prompt("Please enter a number between 5 and 20:"));
if (!myNum || myNum < 5 || myNum > 20) {
    document.getElementById("doWhileOutput").innerHTML = "Invalid input. Please refresh and try again with a number between 5 and 20.";
} else {
    let counter = 1;
    let doWhileResults = "Do while loop starts:<br>";
    do {
        doWhileResults += `Counter is at ${counter}<br>`;
        counter++;
    } while (counter <= myNum);
    document.getElementById("doWhileOutput").innerHTML = doWhileResults;
}

// Task 3: Arrays and Display Methods
const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];
let arrayResults = "List of subjects:<br>";
subjects.forEach(subject => {
    arrayResults += subject + "<br>";
});
document.getElementById("arrayOutput").innerHTML = arrayResults;

document.getElementById("commaSeparatedOutput").innerHTML = "Subjects (comma-separated): " + subjects.join(", ");
