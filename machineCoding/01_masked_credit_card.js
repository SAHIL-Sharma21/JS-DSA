/* machine coding round for creating masked credit card 
below is the example.

console.log(maskify('5105105105105100'))
/output: 5###########5100

console.log(maskify('5555-5555-5555-4444'))
/output: 5###-####-####-4444

console.log(maskify(''))
/output: ''

console.log(maskify('razorpayisgood'))
/output: razorpayisgood
*/

function maskify(cardNumber) {
    // Convert the input to a string if it is not already
    if (typeof cardNumber !== "string") {
        cardNumber = cardNumber.toString();
    }

    // Edge case: if the card number is empty or less than 6 characters long, return it as is
    if (cardNumber === "" || cardNumber.length <= 6) {
        return cardNumber;
    }

    // Get the first character and the last four characters
    const firstChar = cardNumber[0];
    const lastFourChar = cardNumber.slice(-4);

    // Create the masked section
    let maskedSection = "";
    for (let i = 1; i < cardNumber.length - 4; i++) {
        const char = cardNumber[i];
        maskedSection += isNaN(parseInt(char)) ? char : '#';
    }

    // Return the combined string
    return firstChar + maskedSection + lastFourChar;
}

console.log(maskify('5105105105105100'));
console.log(maskify('5555-5555-5555-4444'));
console.log(maskify(''));
console.log(maskify('razorpayisgood'));
console.log(maskify(5555555555554444)); 