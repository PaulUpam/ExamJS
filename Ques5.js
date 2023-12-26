//Ques5//  //Array & funtion if else

function getFirstValue(q5Array) {
  //   if (q5Array.length > 0) {

  //   // console.log(q5Array[0]);

  //        return q5Array[0];
  //   }

  //   else {
  //     //console.log("Array is empty");
  //        return "Array is empty";
  //   }

  // q5Array.length > 0 ? console.log (q5Array[0]) : console.log ("Array is empty"); //print ans but an error undefined
  return q5Array.length > 0 ?  q5Array[0] : "Array is empty"; //help chatGPT
}

// getFirstValue([2,3,5])\


const q5ArrayTestOne = getFirstValue([1, 2, 3]);
console.log(q5ArrayTestOne); // Output: 1

const q5ArrayTestTwo = getFirstValue([80, 5, 100]);
console.log(q5ArrayTestTwo); // Output: 80

const q5ArrayTestThree = getFirstValue([-500, 0, 50]);
console.log(q5ArrayTestThree); // Output: -500
