//finding gcd of number
//input 42 and 18
//output 6
//42 divisior are 1, 2, 3 ,6, 7, 14, 21, 42
//18 divisior are 1, 2 ,3, 6, 9, 18

function gcd(num1, num2) {

    //base case
    if (num1 === num2) {
        return num1;
    }
    if (num1 > num2) {
        return gcd(num1 - num2, num2);
    } else {
        return gcd(num1, num2 - num1);
    }
}

console.log(gcd(42, 18));