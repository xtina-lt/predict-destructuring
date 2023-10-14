# 🔍Predicting Destructuring🔎

### **Links**
 - [Notion Page Version](https://different-delivery-037.notion.site/Predict-Destructuring-84277eda84684a74b16bf9a23df89eb9?pvs=4)
 - [Section Notes](https://different-delivery-037.notion.site/Modern-JavaScript-9302deb4f93d48699228e16d600e360f?pvs=4)

### **Learning Objectives**


- Analyze and explain the reasons behind the output of code blocks using modern JS syntax, including the application of destructuring, scope, and the spread operator.
- Evaluate potential problems in code blocks and propose appropriate solutions related to modern JS concepts such as destructuring, scope, and the spread operator.

---

Welcome to another **Core assignment**! Some students like to explore the assignments before they're finished reading through the lessons, and that's okay! It can be good for your brain to have a preview of what your future challenges might be. However, before you begin this assignment, it's important that you've first:

- Completed the preceding lesson modules
- Taken the knowledge checks to confirm your understanding
- Viewed lecture material related to the assignment topics
- Completed and submitted your practice assignments

---

# **Predict JavaScript I:**

This assignment will ask you to recall what we have learned about the new syntax, rules, and techniques associated with modern JS topics like destructuring, scope, and the spread operator. You will be asked to predict the output of each code block and answer questions in the checklist below about some of the problems.

Each code block, along with predictions and question answers should be included in your .js file.

# **Expected Layout Example**

Why did the code produce that output? If applicable, how would we get the index value that did not output?

```jsx
 //Problem 1000: Why did the code produce that output? If applicable, how would we get the index value that did not output?
const exampleVar = "example";
const exampleArr = ["ex", "am", "ple"];
console.log(exampleArr);

//1. Prediction of the example output should be in commented-out code here.
//2. The actual output
//3. Answering any questions associated with the problem block here.

//Problem 2: ...ect
copy
```

# **Problem 1**

Why did the code produce that output? If applicable, how would we get the index value that did not output?

```jsx
// ##########################################################################
 //Problem 1000) Why did the code produce that output? If applicable, how would we get the index value that did not output?
 //#########################################################################
 const exampleVar = "example";
 console.log(exampleArr);
 let exampleArr = ["ex", "am", "ple"];
 exampleArr = [...exampleArr, exampleVar]
 console.log(exampleArr[exampleArr.length-1]);
```

1. Prediction of the example output should be in commented-out code here
    - [ 'ex', 'am', 'ple' ]
2.  The actual output
    - [ 'ex', 'am', 'ple' ]
3. How would we get the index value that did not output?
    - NA, all outputted.
    - If necessary you can add it to the end and change the value below.

```jsx

 let exampleArr = ["ex", "am", "ple"];
 exampleArr = [...exampleArr, exampleVar]
 console.log(exampleArr[exampleArr.length-1]);
```

# **Problem 2**

```jsx
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);
```

1. Prediction of the example output should be in commented-out code here
    
    ```
    Tesla
    Mercedes
    ```
    
2.  The actual output
    
    ```jsx
    Tesla
    Mercedes
    ```
    
3. Why did the code produce that output? If applicable, what would we need to do to solve any potential problems?
    - The first output came from destructuring an array at the first Element.
    - The second output came about at skipping one element (1 comma) and getting the next element.
    - Fix:
        
        ```jsx
        
        const [,,lastRandomCar] = cars
        console.log(lastRandomCar)
        
        ```
        

# **Problem 3**

```jsx
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);copy
```

1. Prediction of the example output should be in commented-out code here
    
    ```
    12345
    undefined or error
    ```
    
2.  The actual output
    
    ```
    12345
    undefined
    ```
    
3. Why did the code produce that output? If applicable, how would we alter this code without changing either console.log?
    - There was no password attribute initially.
    - Fix (only changed code):
        
        ```jsx
        const person = {
            name: 'Phil Smith',
            age: 47,
            height: '6 feet',
            password : '12345'
        }
        //    now has property
        const { password: hashedPassword } = person;  
        console.log(hashedPassword);
        ```
        

# **Problem 4**

```jsx
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);copy
```

1. Prediction of the example output should be in commented-out code here
    
    ```
    false
    true
    ```
    
2.  The actual output
    
    ```
    false
    true
    ```
    
3. Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.
    - *2 == 5 -> FALSE*
    - *2 === 2 -> TRUE*
    - 4th index:
        
        ```jsx
        
        let [,,,,fourth] = numbers
        console.log(fourth) // 6
        ```
        

# **Problem 5**

```jsx
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);copy
```

1. Prediction of the example output should be in commented-out code here
    
    ```
    value
    [ 1, 5, 1, 8, 3, 3 ]
    1
    5
    ```
    
2.  The actual output
    
    ```
    value
    [ 1, 5, 1, 8, 3, 3 ]
    1
    5
    ```
    
3. *Why did the code produce that output?* 
    - value is grabbed from the attribute key in last test
    - secondKey is grabbed from the object’s secondKey attribute → use for index 0
    - willThisWork is copied from the second element in second key since it only has one comma.
    - *Console.log the last value in the secondKey property's array.*
        
        ```jsx
        const [,,,,, lastKey] = secondKey
        console.log(lastKey)
        
        ```
        

# **Problem 6**

First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

```jsx
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
```

1. Prediction of the example output should be in commented-out code here
    
    ```
    Paul 0
    George 1
    John 2
    Ringo 3
    last Ringo 4
    ```
    
2.  The actual output
    
    ```
    Paul was found at index 0
    George was found at index 1
    John was found at index 2
    Ringo was found at index 3
    name and index after loop is Ringo:4
    ```
    
3. *First, how many scopes does the following code block contain? Define each scope and guess what the output will be.*
    - Total: 3
    - (1) Global: printName's return value. Has beetles variable.
    - Local:
        - (2) printNames(): starts acutalPrintingNames and will be result of that function.
        - (3) actualPrintingNames(): logs each name and index

# **Problem 7**

```jsx
function actuallyPrintingNames() {
  for (let index = 0; index < names.length; index++) {
let name = names[index];
    console.log(name + ' was found at index ' + index);
  }
  console.log('name and index after loop is ' + name + ':' + index);
}copy
```

1. Prediction of the example output should be in commented-out code here
    
    ```
    
    ```
    
2.  The actual output
    
    ```
    
    ```
    
3. Why did the code produce that output?
    - *the function is never invoked, hence nothing logs or returns*

# **Problem 8**

```jsx
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);copy
```

1. Prediction of the example output should be in commented-out code here
    
    ```
    Paul was found at index 0
    George was found at index 1
    John was found at index 2
    Ringo was found at index 3
    ```
    
2.  The actual output
    
    ```
    Paul was found at index 0
    George was found at index 1
    John was found at index 2
    Ringo was found at index 3
    ```
    
3. Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.
    - names[0] = Paul
    - names[1] = George
    - names[2] = John
    - names[3] = Ringo
    - Keyword explainations
        - const on beetles since we don’t want to reassign anything.
        - let for index since we only want to use it within the for loop scope and can be reassigned.

# **Problem 9**

```jsx
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0])
console.log(planet === planetCopy)
copy
```

1. Prediction of the example output should be in commented-out code here
    
    ```
    true
    false
    ```
    
2.  The actual output
    
    ```
    true
    false
    ```
    
3. Why did the code produce that output? Explain why each console.log looks the way it does.
    - They are both strict equals.
    - The first compares if two strings are the same - which they are.
    - The second compares two objects. While the same to the naked eye.. They are different and get different spots in memory.
    
    ```
    //                      "gas"        ===       "gas" 
    console.log(planet.composition[0] === planetCopy.composition[0]) 
        // origional memory   new memory slot
    console.log(planet === planetCopy)
    ```
    

# Directions

- [x]  Predict the Output for Problem 1 and answer the associated questions.
- [x]  Predict the Output for Problem 2 and answer the associated questions.
- [x]  Predict the Output for Problem 3 and answer the associated questions.
- [x]  Predict the Output for Problem 4 and answer the associated questions.
- [x]  Predict the Output for Problem 5 and answer the associated questions.
- [x]  Predict the Output for Problem 6 and answer the associated questions.
- [x]  Predict the Output for Problem 7 and answer the associated questions.
- [x]  Predict the Output for Problem 8 and answer the associated questions.
- [x]  Predict the Output for Problem 9 and answer the associated questions.


<div align="center">


<!-- 👣FOOTER👣 -->
&nbsp;
<hr />
<p align="center">A work by <a href="https://github.com/xtina-lt/">Christina Torres</a></p>
<p align="center"><span style="color: #808080;"><em>xtina_lt@outlook.com</em></span></p>

<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Add font awesome icons -->
<p style="text-align: center;">
    <a href="https://www.linkedin.com/in/xtinacodes/" class="fa fa-linkedin"></a>
    <a href="https://github.com/xtina-lt/" class="fa fa-github"></a>
</p>
&nbsp;
</div>