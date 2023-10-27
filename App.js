// !!!!!!!!!!!! assigment 38-42 !!!!!!!!!!!!


//?Q1 answer  
// function powerWhile(a, b) {
//     let result = 1;
//     while (b > 0) {
//       result *= a;
//       b--;
//     }
//     return result;
//   }
  
//   // Example usage:
//   const result = powerWhile(2, 3);
//   console.log(result);  // Output: 8
  


//?Q2 answer   

//   function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true; // It's a leap year
//     } else {
//       return false; // It's not a leap year
//     }
//   }
  
//   // Example usage:
//   const year = parseInt(prompt("Enter a year:"));
//   if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
//   } else {
//     console.log(year + " is not a leap year.");
//   }
  



// ?Q3 answer

// Function to calculate the semi-perimeter (S)
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
//   }
  
//   // Function to calculate the area of a triangle
//   function calculateTriangleArea(a, b, c) {
//     const S = calculateSemiPerimeter(a, b, c);
//     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
//   }
  
//   // Example usage:
//   const sideA = 5;
//   const sideB = 6;
//   const sideC = 7;
  
//   const area = calculateTriangleArea(sideA, sideB, sideC);
//   console.log(`The area of the triangle is: ${area}`);
  




 


// ?Q4 answer

// Function to calculate the average of three subjects
// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
//   }
  
//   // Function to calculate the percentage
//   function calculatePercentage(totalMarks, maxMarks) {
//     return (totalMarks / maxMarks) * 100;
//   }
  
//   // Main function to calculate average and percentage
//   function mainFunction(subject1, subject2, subject3, maxMarks) {
//     const average = calculateAverage(subject1, subject2, subject3);
//     const totalMarks = subject1 + subject2 + subject3;
//     const percentage = calculatePercentage(totalMarks, maxMarks);
    
//     console.log(`Average marks: ${average}`);
//     console.log(`Percentage: ${percentage}%`);
//   }
  
//   // Example usage:
//   const subject1Marks = 85;
//   const subject2Marks = 90;
//   const subject3Marks = 78;
//   const maxMarksPerSubject = 100;
  
//   mainFunction(subject1Marks, subject2Marks, subject3Marks, maxMarksPerSubject);
  


// ?Q5 answer

// function customIndexOf(string, target) {
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === target) {
//         return i; // Return the index if the character is found
//       }
//     }
//     return -1; // Return -1 if the character is not found
//   }
  
//   // Example usage:
//   const text = "Hello, world!";
//   const characterToFind = "o";
//   const index = customIndexOf(text, characterToFind);
  
//   if (index !== -1) {
//     console.log(`Found '${characterToFind}' at index: ${index}`);
//   } else {
//     console.log(`'${characterToFind}' not found in the string.`);
//   }
  
// ?Q6 6
// function deleteVowels(sentence) {
//     if (sentence.length > 25) {
//       return "Sentence is too long";
//     }
    
//     // Regular expression to match vowels (both lowercase and uppercase)
//     const vowelsRegex = /[aeiouAEIOU]/g;
  
//     // Use the replace method to remove all vowels
//     const sentenceWithoutVowels = sentence.replace(vowelsRegex, '');
  
//     return sentenceWithoutVowels;
//   }
  
//   // Example usage:
//   const inputSentence = "This is a sample sentence without vowels.";
//   const result = deleteVowels(inputSentence);
  
//   console.log(result);
  

// ?Q7 answer


// function countSuccessiveVowelsOccurrences(text) {
//     const vowels = "aeiouAEIOU"; // Define the vowels
//     let count = 0;
  
//     for (let i = 0; i < text.length - 1; i++) {
//       const currentChar = text[i];
//       const nextChar = text[i + 1];
  
//       if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
//         count++;
//         switch (currentChar + nextChar) {
//           case 'ea':
//           case 'ui':
//           // Add more cases for other combinations if needed
//             console.log(currentChar + nextChar); // Print the successive vowels
//             break;
//         }
//       }
//     }
  
//     return count;
//   }
  
//   // Example usage:
//   const sentence = "Pleases read this application and give me gratuity";
//   const numberOfOccurrences = countSuccessiveVowelsOccurrences(sentence);
  
//   console.log(`Number of successive vowel occurrences: ${numberOfOccurrences}`);
  



// ?Q8 answer


// Function to convert kilometers to meters
// function convertToMeters(kilometers) {
//     return kilometers * 1000;
//   }
  
//   // Function to convert kilometers to feet
//   function convertToFeet(kilometers) {
//     const meters = convertToMeters(kilometers);
//     return meters * 3.28084;
//   }
  
//   // Function to convert kilometers to inches
//   function convertToInches(kilometers) {
//     const meters = convertToMeters(kilometers);
//     return meters * 39.3701;
//   }
  
//   // Function to convert kilometers to centimeters
//   function convertToCentimeters(kilometers) {
//     const meters = convertToMeters(kilometers);
//     return meters * 100;
//   }
  
//   // Example usage:
//   const distanceInKilometers = parseFloat(prompt("Enter the distance in kilometers:"));
  
//   const distanceInMeters = convertToMeters(distanceInKilometers);
//   const distanceInFeet = convertToFeet(distanceInKilometers);
//   const distanceInInches = convertToInches(distanceInKilometers);
//   const distanceInCentimeters = convertToCentimeters(distanceInKilometers);
  
//   console.log(`Distance in meters: ${distanceInMeters} m`);
//   console.log(`Distance in feet: ${distanceInFeet} ft`);
//   console.log(`Distance in inches: ${distanceInInches} in`);
//   console.log(`Distance in centimeters: ${distanceInCentimeters} cm`);
  



// ?Q9 answer


// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;
  
//     if (hoursWorked <= regularHours) {
//       return 0; // No overtime pay for regular hours
//     } else {
//       const overtimeHours = hoursWorked - regularHours;
//       const overtimePay = overtimeHours * overtimeRate;
//       return overtimePay;
//     }
//   }
  
//   // Example usage:
//   const hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
//   const overtimePay = calculateOvertimePay(hoursWorked);
  
//   console.log(`Overtime pay: Rs. ${overtimePay}`);
  


// ?Q10 answer


// function calculateCurrencyNotes(amountInHundreds) {
//     const denomination100 = 100;
//     const denomination50 = 50;
//     const denomination10 = 10;
  
//     const notes100 = Math.floor(amountInHundreds);
//     const remainingAmount = (amountInHundreds - notes100) * 100; // Convert to whole number
  
//     const notes50 = Math.floor(remainingAmount / denomination50);
//     const notes10 = Math.floor((remainingAmount % denomination50) / denomination10);
  
//     return {
//       notes100,
//       notes50,
//       notes10
//     };
//   }
  
//   // Example usage:
//   const amountInHundreds = parseFloat(prompt("Enter the amount in hundreds:"));
//   const notes = calculateCurrencyNotes(amountInHundreds);
  
//   console.log(`Number of 100 rupee notes: ${notes.notes100}`);
//   console.log(`Number of 50 rupee notes: ${notes.notes50}`);
//   console.log(`Number of 10 rupee notes: ${notes.notes10}`);
  