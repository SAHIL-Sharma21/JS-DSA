//knowledge of sets

const set = new Set();

const arr1 = [1, 2];
const arr2 = [1, 2];

// set.add(arr1);
// set.add(arr2);

//WE CAN SOLVE THIS BEHAVIOUR BY STRINGIFY THE INPUT
set.add(JSON.stringify(arr1));
set.add(JSON.stringify(arr2));

// console.log(set.size);// 2
// console.log(set);// Set(2) { [ 1, 2 ], [ 1, 2 ] } //memory wala refrence hai idr 

//if add ki jagah hm string and number denge to woh quniue way mei store hoga
//the both array are different and both will store as they have diffrent memory location

// console.log(set.size);// 1
// console.log(set); //Set(1) { '[1,2]' }
// console.log(set.has('[1, 2]'));// false


//another example
// const start = 'a';

//real ganme satrt when we give new input as below
const start = 'az'
const newSet = new Set(start);
const newSetv2 = new Set([start]);

// console.log(newSet);//Set(1) { 'a' }
// console.log(newSetv2);// Set(1) { 'a' }
// console.log(newSet === newSetv2);//false

//after chamginf the starrt --> in normal it splits and if we give in array then it will consider it as one node.
console.log(newSet);//Set(2) { 'a', 'z' }
console.log(newSetv2);// Set(1) { 'az' }
console.log(newSet === newSetv2);//false


let r = 2
let c = 3;

const pos = r + ',' + c;
console.log(pos);//2,3
console.log(typeof pos);//string