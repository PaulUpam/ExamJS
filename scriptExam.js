//1. Return the Sum of Two Numbers//

const addition = (numberOne, numberTwo) => {
  const sum = numberOne + numberTwo;
  return sum;
};

console.log(addition(3, 2)); // Print: 5
console.log(addition(-3, -6)); // Print: -9
console.log(addition(7, 3)); // Print: 10

//2. Convert Minutes into Seconds//

const convertToSeconds = (minutes) => {
  const seconds = minutes * 60;
  return seconds;
};

console.log(convertToSeconds(5)); // Print: 300
console.log(convertToSeconds(3)); // Print: 180
console.log(convertToSeconds(2)); // Print: 120

//3. Return the Next Number from the Integer Passed//

const additionAgain = (number) => {
  const Q3Test = number + 1;

  return Q3Test;
};

const Q3TestOne = additionAgain(0);
console.log(Q3TestOne); // Print: 1

const Q3TestTwo = additionAgain(9);
console.log(Q3TestTwo); // Print: 10

const Q3TestThree = additionAgain(-3);
console.log(Q3TestThree); // Print: -2

//4. Area of a Triangle//

const triArea = (base, height) => {
  const triangleAreaFormula = (1 / 2) * (base * height);

  return triangleAreaFormula;
};

console.log(triArea(3, 2)); // Print: 3

console.log(triArea(7, 4)); // Print: 14

console.log(triArea(10, 10)); // Print: 50

//5. Return the First Element in an Array//

const getFirstValue = (q5Array) => {
  return q5Array.length > 0 ? q5Array[0] : "Array is empty";
};

console.log(getFirstValue([1, 2, 3])); // Output: 1

console.log(getFirstValue([80, 5, 100])); // Output: 80

const TestThree = getFirstValue([-500, 0, 50]);
console.log(TestThree); // Output: -500

//6. Convert Age to Days//

const calcAge = (age) => {
  const dayspYear = 365;

  const ageDays = age * dayspYear;

  return ageDays;
};

const calculateAge = calcAge(65);
console.log(calculateAge); // Print: 23725

console.log(calcAge(0)); // Print: 0

console.log(calcAge(20)); // Print: 7300

// 7. Power Calculator //

const circuitPower = (voltage, current) => {
  const power = voltage * current; //formula given

  return power;
};

const q7Power = circuitPower(230, 10);
console.log(q7Power); // print: 2300

console.log(circuitPower(110, 3)); //print: 330

console.log(circuitPower(480, 20)); //print: 9600

//8.Maximum Edge of a Triangle//

const nextEdge = (sideLeft, sideRight) => {
  const maxRange = sideLeft + sideRight - 1; //given (side1 + side2) - 1 = maximum range of third edge.

  return maxRange;
};

console.log(nextEdge(8, 10)); // Print: 17

console.log(nextEdge(5, 7)); // Print: 11

console.log(nextEdge(9, 2)); // Print: 10

// 9. Return the Remainder from Two Numbers //
const remainder = (dataOne, dataTwo) => {
  const remainderValue = dataOne % dataTwo;

  return remainderValue;
};

console.log(remainder(1, 3)); // Output: 1

console.log(remainder(3, 4)); // Output: 3

console.log(remainder(-9, 45)); // Output: -9

console.log(remainder(5, 5)); // Output: 0

//10. Return Something to Me!//
const giveMeSomething = (a) => {
  const finalOutput = "something " + a;
  return finalOutput;
};

console.log(giveMeSomething("is better than nothing")); // print: "something is better than nothing"

console.log(giveMeSomething("Bob Jane")); // print: "something Bob Jane"

console.log(giveMeSomething("something")); // print: "something something"

//11 Correct the Mistakes

const squared = (num) => {
  const squareFormula = num * num;
  return squareFormula;
};

console.log(squared(5)); // Print: 25
console.log(squared(9)); // Print: 81
console.log(squared(100)); // Print: 10000

// 12.Is the Number Less than or Equal to Zero?
const lessThanOrEqualToZero = (givenData) => {
  expOutput = givenData <= 0;
  return expOutput;
};

const q12Output = lessThanOrEqualToZero(5);
console.log(q12Output); // print: false

console.log(lessThanOrEqualToZero(0)); // print: true

console.log(lessThanOrEqualToZero(-2)); // print: true

// 13. Sum of Polygon Angles
const sumPolygon = (n) => {
  const internalAngle = (n - 2) * 180; // Formula

  return internalAngle;
};

console.log(sumPolygon(3)); // Print: 180

console.log(sumPolygon(4)); // Print: 360

console.log(sumPolygon(6)); // Print: 720

//14. Basic Variable Assignment

const nameString = (name) => {
  const result = name + "Coder";

  return result;
};

console.log(nameString("Mubashir")); // Print: "MubashirCoder"

console.log(nameString("Matt")); // Print: "MattCoder"

console.log("javaScript"); // Print: "javaScriptCoder"

//15. Less Than 100?

const lessThan100 = (firstNumber, secondNumber) => {
  const checking = firstNumber + secondNumber < 100;
  return checking;
};

console.log(lessThan100(22, 15)); // Print: true // 22 + 15 = 37

console.log(lessThan100(83, 34)); //Print: false // 83 + 34 = 117

console.log(lessThan100(3, 77)); // Print: true  // 3 + 77 = 80
