// //8.Maximum Edge of a Triangle//


// const nextEdge = (sideLeft, sideRight) => {
  
//    const maxRange = (sideLeft + sideRight) - 1; //given (side1 + side2) - 1 = maximum range of third edge.
   
//     return maxRange;
// }


// console.log(nextEdge(8, 10)); // Print: 17

// console.log(nextEdge(5, 7)); // Print: 11

// console.log(nextEdge(9, 2)); // Print: 10


//9. Return the Remainder from Two Numbers//


// Function that returns the remainder from two numbers //

// function remainder(num1, num2) {
//    // Calculate the remainder using the remainder operator %
//     var remainderValue = num1 % num2;

//     return remainderValue;
// }
const remainder = (num1, num2)=> {
    
    const remainderValue = num1 % num2;
 
     return remainderValue;
 }

var result1 = remainder(1, 3); //(১÷৩) এর ফলাফল ভাজ্য: ১ ভাজক: ৩ ভাগফল: ০ ভাগশেষ: ১
console.log(result1); // Output: 1

var result2 = remainder(3, 4);  //(৩÷৪) এর ফলাফল ভাজ্য: ৩ ভাজক: ৪ ভাগফল: ০ ভাগশেষ: ৩
console.log(result2); // Output: 3

var result3 = remainder(-9, 45); // (-৯÷৪৫) এর ফলাফল ভাজ্য: -৯ ভাজক: ৪৫ ভাগফল: -১ ভাগশেষ: -৯
console.log(result3); // Output: -9

var result4 = remainder(5, 5);
console.log(result4); // Output: 0









