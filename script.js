// Function to verify that the service quality input is valid
function checkServiceQuality(quality) {
  // Convert input to lowercase to avoid case sensitivity issues
  const validInput = quality.toLowerCase();

  // Check against valid options
  if (validInput === "great" || validInput === "ok" || validInput === "poor") {
    return validInput;
  } else {
    return null;
  }
}

// Function to verify the service amount is between $5.00 and $500.00
function checkServiceAmount(amount) {
  // Convert string to float
  const numericAmount = parseFloat(amount);

  // Check if numericAmount is a number and in range
  if (!isNaN(numericAmount) && numericAmount >= 5 && numericAmount <= 500) {
    return numericAmount;
  } else {
    return null;
  }
}

// Function to calculate tip based on service quality
function calculateTip(amount, quality) {
  let tipPercentage = 0;
  
  if (quality === "great") {
    tipPercentage = 0.20; // 20% tip
  } else if (quality === "ok") {
    tipPercentage = 0.15; // 15% tip
  } else if (quality === "poor") {
    tipPercentage = 0.10; // 10% tip
  }

  return amount * tipPercentage;
}

// Main Code Execution
function main() {
  // Prompt user for service amount
  const serviceAmountInput = prompt("Enter the dollar amount of the service (between $5 and $500):");
  const validServiceAmount = checkServiceAmount(serviceAmountInput);

  // If invalid amount, show message and stop
  if (validServiceAmount === null) {
    alert("Invalid service amount entered. Please refresh and try again.");
    return; // End the code
  }

  // Prompt user for service quality
  const serviceQualityInput = prompt("Was the service 'great', 'ok', or 'poor'?");
  const validServiceQuality = checkServiceQuality(serviceQualityInput);

  // If invalid quality, show message and stop
  if (validServiceQuality === null) {
    alert("Invalid service quality entered. Please refresh and try again.");
    return; // End the code
  }

  // Calculate tip
  const tipAmount = calculateTip(validServiceAmount, validServiceQuality);

  // Show the user a descriptive message
  alert(
    "Service Amount: $" + validServiceAmount.toFixed(2) + 
    "\nService Quality: " + validServiceQuality +
    "\nRecommended Tip: $" + tipAmount.toFixed(2)
  );
}

// Run our main function when the page loads
main();
