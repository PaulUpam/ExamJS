// //10//
// const giveMeSomething=(newLine) => {

//     const finalOutput = "something " + newLine;
//     return finalOutput;
// }

// console.log(giveMeSomething("is better than nothing"));  // print: "something is better than nothing"

// console.log(giveMeSomething("Bob Jane")); // print: "something Bob Jane"

// console.log(giveMeSomething("something")); // print: "something something"

//11 Correct the Mistakes

const squared =(num) => {
  const corrrectFormula = num * num; // Fixing syntax error  for square=height*width
  return corrrectFormula;
}

console.log(squared(5)); // Print: 25
console.log(squared(9)); // Print: 81
console.log(squared(100)); // Print: 10000

// 12.Is the Number Less than or Equal to Zero?

// function lessThanOrEqualToZero(num) {
 
//   expOutput = num <= 0;
//   return expOutput;
// }

const lessThanOrEqualToZero=(givenData)=> {
 
    expOutput = givenData<= 0;
    return expOutput;
  }


const q12Output = lessThanOrEqualToZero(5);
console.log(q12Output);                // print: false

console.log(lessThanOrEqualToZero(0)); // print: true

console.log(lessThanOrEqualToZero(-2)); // print: true
