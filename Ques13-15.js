// // 13. Sum of Polygon Angles
const sumPolygon = (n) => {
  
   const internalAngle = (n - 2) * 180;   // Formula to calculate the sum of internal angles: (n - 2) x 180

    return internalAngle;
}



console.log(sumPolygon(3)); // Print: 180


console.log(sumPolygon(4)); // Print: 360


console.log(sumPolygon(6)); // Print: 720


// //14. Basic Variable Assignment

const nameString =(name)=> {
   
   const result = name + "Coder";

    return result;
}


console.log(nameString("Mubashir")); // Output: "MubashirCoder"

console.log(nameString("Matt")); // Output: "MattCoder"

console.log("javaScript"); // Output: "javaScriptCoder"

 
//15. Less Than 100?


const lessThan100 = (firstNumber, secondNumber)=> {
    
    const checking=(firstNumber + secondNumber) < 100;
    return checking;
}


console.log(lessThan100(22, 15)); // Print: true // 22 + 15 = 37 

console.log(lessThan100(83, 34)); //Print: false // 83 + 34 = 117

console.log(lessThan100(3, 77)); // Print: true  // 3 + 77 = 80
