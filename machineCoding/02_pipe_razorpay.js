//good question which is asked in fintech

/**
Implement a utlity function called pipe that accepts a series of function arguments.
The pipe function should return a new function that, when called, process and initial input
by passing it through the each of the provided functions in sequence,
Where the output of one function becomes the input of the next.


Function signature

javascript
Copy code
pipe(fn1, fn2, fn3, ...fnN)(input);
*/

function pipe(...fns) {
    return function (initialValue) {
        return fns.reduce((acc, fn) => fn(acc), initialValue);//very good use case of reduce method we can get acc and also pass function to it as CB.
    }
}


//example usage
const getName = (object) => object.name;
const makeUpperCase = (string) => string.toUpperCase();
const slice = (string) => string.slice(0, 3);

const method = pipe(getName, makeUpperCase, slice);
const value = method({ name: 'Sahil Sharma' });
console.log(value);