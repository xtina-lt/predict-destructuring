/*#################################################################################
  _____              _ _      _   
 |  __ \            | (_)    | |  
 | |__) | __ ___  __| |_  ___| |_ 
 |  ___/ '__/ _ \/ _` | |/ __| __|
 | |   | | |  __/ (_| | | (__| |_ 
 |_|   |_|  \___|\__,_|_|\___|\__|
                                                   
Written By: Christina Torres
Questions By: Coding Dojo
See README for a Notion version and notes

#################################################################################*/




// #################################################################################
 //Problem 1000) 
 //################################################################################
 const exampleVar = "example";
 const exampleArr = ["ex", "am", "ple"];
 console.log(exampleArr);
     
 //1. Prediction of the example output should be in commented-out code here.
        // [ 'ex', 'am', 'ple' ]
 //2. The actual output
        // [ 'ex', 'am', 'ple' ]
 //3. How would we get the index value that did not output?
        // - NA, all outputted. 
        // - If neccessary you can add it to the end and change the value
            // let exampleArr = ["ex", "am", "ple"];
            // exampleArr = [...exampleArr, exampleVar]
            // console.log(exampleArr[exampleArr.length-1]);



 
 // #################################################################################
 //Problem 1) 
 //################################################################################
 const cars = ['Tesla', 'Mercedes', 'Honda']
 const [ randomCar ] = cars
 const [ ,otherRandomCar ] = cars
 //Predict the output
 console.log(randomCar)
 console.log(otherRandomCar)
 
 //1. Prediction of the example output should be in commented-out code here.
        // Tesla
        // Mercedes
 //2. The actual output
        // Tesla
        // Mercedes
 //3. Why did the code produce that output? If applicable, how would we get the index value that did not output?
        // - The first output came from destructuring an array at the first Element.
        // - The second output came about at skipping one element (1 comma) and getting the next element.
        // - To get the last:
            //  const [,,lastRandomCar] = cars
            // console.log(lastRandomCar)




// #################################################################################
// Problem 2) 
//################################################################################
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
// console.log(employeeName);
//1. Prediction of the example output should be in commented-out code here.
    // Elon and error or undefined
//2. The actual output
    // Elon
    // ReferenceError: employeeName is not defined
//3. Why did the code produce that output? If applicable, what would we need to do to solve any potential problems?



// #################################################################################
// Problem 3) 
//################################################################################
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);    
//1. Prediction of the example output should be in commented-out code here.
        // 12345
        // undefined or error

//2. The actual output
        // 12345
        // undefined
//3. Why did the code produce that output? If applicable, how would we alter this code without changing either console.log?
        // - There was no password attribute initially. 
        // - Fix:
            // const person = {
            //     name: 'Phil Smith',
            //     age: 47,
            //     height: '6 feet',
            //     password : '12345'
            // }
            // //    now has property
            // const { password: hashedPassword } = person;  
            // console.log(hashedPassword);




// #################################################################################
// Problem 4) 
//################################################################################
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second); // 2 == 5 -> FALSE
console.log(first === third);   // 2 === 2 -> TRUE
//1. Prediction of the example output should be in commented-out code here.
        // false
        // true
//2. The actual output
        // false
        // true
//3. Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.
        // 2 == 5 -> FALSE
        // 2 === 2 -> TRUE
        // let [,,,,fourth] = numbers
        // console.log(fourth) // 6




// #################################################################################
// Problem 5) 
//################################################################################
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // value
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //`1
console.log(willThisWork); // 5
//1. Prediction of the example output should be in commented-out code here.
        // value
        // [ 1, 5, 1, 8, 3, 3 ]
        // 1
        // 5
//2. The actual output
        // value
        // [ 1, 5, 1, 8, 3, 3 ]
        // 1
        // 5
//3. Why did the code produce that output? Console.log the last value in the secondKey property's array.
        // const [,,,,, lastKey] = secondKey
        // console.log(lastKey)
 


// #################################################################################
// Problem 6) 
//################################################################################
const problemSix = () =>{
    var beatles = ['Paul', 'George', 'John', 'Ringo'];
    function printNames(names) {
      function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
          var name = names[index];
          console.log(name + ' was found at index ' + index);
        }
        console.log('name and index after loop is ' + name + ':' + index);
      }
      actuallyPrintingNames();
    }
    printNames(beatles);
}
//1. Prediction of the example output should be in commented-out code here.
        // Paul 0
        // George 1
        // John 2
        // Ringo 3
        // last Ringo 4
//2. The actual output
        // Paul was found at index 0
        // George was found at index 1
        // John was found at index 2
        // Ringo was found at index 3
        // name and index after loop is Ringo:4
//3. First, how many scopes does the following code block contain? Define each scope and guess what the output will be.
        // Total: 3
        // - Global: printName's return value. Has beetles variable.
        // - Local: 
        //     - printNames(): starts acutalPrintingNames and will be result of that function.
        //     - actualPrintingNames(): logs each name and index



// #################################################################################
// Problem 7) 
//################################################################################
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }     

//1. Prediction of the example output should be in commented-out code here.
    // 
//2. The actual output
    // 
//3. Why did the code produce that output?
    // the function is never invoked, hence nothing logs or returns




// #################################################################################
// Problem 8) Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.
//################################################################################
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(`names[${index}] = ${name}`)
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);
//1. Prediction of the example output should be in commented-out code here.
        // Paul was found at index 0
        // George was found at index 1
        // John was found at index 2
        // Ringo was found at index 3
//2. The actual output
        // Paul was found at index 0
        // George was found at index 1
        // John was found at index 2
        // Ringo was found at index 3
//3. Answering any questions associated with the problem block here.
        // - const on beetles since we don’t want to reassign anything.
        // - let for index since we only want to use it within the for loop scope and can be reassigned.



// #################################################################################
// Problem 9) Why did the code produce that output? Explain why each console.log looks the way it does.
//################################################################################
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
    composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
//                      "gas"        ===       "gas" 
console.log(planet.composition[0] === planetCopy.composition[0]) 
    // origional memory   new memory slot
console.log(planet === planetCopy)
//1. Prediction of the example output should be in commented-out code here.
        // true
        // false
//2. The actual output
        // true
        // false
//3. Why did the code produce that output? Explain why each console.log looks the way it does.


 



