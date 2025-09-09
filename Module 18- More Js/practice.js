let a=[5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39];

let b=[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];


console.log("Array a:", a);
console.log("Array b:", b);
console.log((a+b)); // This will concatenate the two arrays as strings

// To combine the two arrays into one, use the spread operator or concat method
let combinedArray = [...a, ...b];
console.log("Combined Array:", combinedArray);