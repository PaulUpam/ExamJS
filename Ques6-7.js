//Ques6//

function calcAge(age) {

  const dayspYear = 365; //given

  const ageDay = age * dayspYear; //Formula
  
//   console.log(ageDay);

  return ageDay;
}

// calcAge(45);

const calculateAge1 = calcAge(65);
console.log(calculateAge1); // Print: 23725

const calculateAge2 = calcAge(0);
console.log(calculateAge2); // Print: 0

const calculateAge3 = calcAge(20);
console.log(calculateAge3); // Print: 7300



//Ques 7//

function circuitPower(voltage, current) {

  const power = voltage * current; //formula given
//    console.log(power);
   return power;
 }

//  circuitPower(3,7);
//  circuitPower(230, 10);
//  circuitPower(110, 3); 

//  console.log( circuitPower(3,7)); // print: 21
 
 const q7Power1 = circuitPower(230, 10);
 console.log(q7Power1);               // print: 2300
 
 const q7Power2 = circuitPower(110, 3);
 console.log(q7Power2);                    // print: 330
 
 const q7Power3 = circuitPower(480, 20);
 console.log(q7Power3); //print: 9600
