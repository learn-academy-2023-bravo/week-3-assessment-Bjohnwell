// ASSESSMENT 3: Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Red 
describe("fibSequence", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})


// ReferenceError: fibSequence is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.179 s

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// GREEN 
// PSEUDOCODE
// input: a length (greater than 2) 
// output: an array that length containing the numbers of the Fibonacci sequence. ie:[1, 1, 2, 3, 5, 8]

// Create a function called fibSequence
// The function will take a parameter of (lenght) for the length of the array output
// use a comparitive statement to check if the lengther is greater than 2 using relational opertors 
// if the lenght is less than 2 return an empty array
// create a loop to check if to iterate over the array greater than 2
// for each index from 2 to the end of the array add the preceeding 2 numbers 
// return the completed array

const fibSequence = (length) => {
  // check if the length is greater than 2
  if (length < 2) {
    // if the length is less than 2 return the an empty array
    return [];
  }

  // create an array to hold the output array of the Fibonacci sequence.
  let fibArray = [1, 1];
  // iterate over the lenth of the array for index 2 or greater 
  for (let i = 2; i < length; i++) {
    // for each index of 2 add the preceeding 2 numbers
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  // return the completed array
  return fibArray;
};





// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
// RED


describe("sortedArray", () => {
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60,
  }

  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65,
  }

  it("returns an array of the values sorted from least to greatest", () => {
    expect(sortedArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(sortedArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// ReferenceError: sortedArray is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.205 s

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// GREEN 
// PSEUDOCODE:
// input: the provided variables studyMinutesWeek1 and studyMinutesWeek2
// output: [15, 15, 20, 30, 30, 60, 90]
//         [10, 15, 20, 45, 60, 65, 100]

// Process:
// create a function that takes a single parameter of the object 
// create a variable to hold the values from the given object
// use the sort() method to rearrange the values 
// use a comparator function to determine the correct order of the values (note I was stuck on this till today when it was apart of our whiteboarding excercise)
// return the sorted array 

const sortedArray = (obj) => {
  const values = Object.values(obj);
  return values.sort((a, b) => a - b);
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// RED 
describe("accumulatingSum", () => {
  const accountTransactions1 = [100, -17, -23, -9];
  const accountTransactions2 = [250, -89, 100, -96];
  const accountTransactions3 = [];

  it("returns an array of the accumulating sum", () => {
    expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51]);
    expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165]);
    expect(accumulatingSum(accountTransactions3)).toEqual([]);
  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// GREEN 
// PSEUDOCODE
// input: provided variables
// output: [100, 83, 60, 51]
//         [250, 161, 261, 165]
//         []

// Process:
// create a function that takes a single argument of an array
// create a vaiable to set the inital sum to 0
// use .map to iterate over the array and add the current number to the previous number 
// return a new array with the updated elements 

function accumulatingSum(arr) {
  let sum = 0;
  return arr.map(num => sum += num);
}