//---------------------------------------- Arrow Functions


// Vanilla JavaScript Function
function addTwoNums(a, b){
    return a + b;
}
let sum = addTwoNums(5, 2);
console.log('vanilla JS: ', sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum1 = addTwoNumbers(5, 2);
console.log('Arrow Function: ', sum1);

// Single Line Arrow Function With Parameters
const add2 = (c, d) => c + d;
let sum2 = add2(10, 10);
console.log('Single Line Arrow Function: ', sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Implicit returns: Scott');

const sayHello = () => console.log('One line function = Hello');
sayHello()

// Returning Multiple Lines
const returnMultiLine = () => (
  `<p>
    Multiple lines returned
   </p>`
)
console.log(returnMultiLine());



//-------------------------------------------- Spread Operator



// No Spread Operator
let array1 = [1, 2, 3];
let array2 = array1;
array2.push(4);
console.log('First array will also have 4 added: ', array1);
console.log('Second Array adds 4 after .push: ', array2);

// Copy an Array
let array3 = [4, 5, 6];
let array4 = [...array3];
array4.push(7);
console.log('Third Array does not add 7 now it has spread opperator: ', array3);
console.log('But the fourth array will add 7: ', array4);

// Copy an Object
let object1 = {a: 1, b: 2, c: 3};
let object2 = {...object1, d: 4};
let object3 = {...object1, b: 0};
console.log('First Object remains as is: ', object1);
console.log('Second object has spread operator so will add d: ', object2);
console.log('Third object updates b but doesnt change object1: ', object3);

// Copy only a section of Array or Object
let array5 = [...array1, {...object1}, ...array2, 'new', 'elements'];
console.log('Adding specific content: ', array5);



//---------------------------------------------- Rest Operator



// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum3 = sumAll(1, 2, 3);
console.log('Regular arrow function: ',sum3);

// Extra arguments ignored
let sum4 = sumAll(1, 2, 3, 4, 5, 6);
console.log('Wont add the new numbers in the sum: ',sum4)

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum5 = a + b + c;
    for (let i of rest){
        sum5 += i;
    }

    return sum5;
}
let sum6 = sumRest(1, 2, 3, 4, 5, 6);
console.log('Now with ...rest operator, all the numbers will be added: ',sum6);



//------------------------------------------------- Destructuring



// Destructuring Arrays
let ages = [30, 26, 27];
let john = ages[0];
let mary = ages[1];
let joe = ages[2];
console.log('Vanilla JS variable assignment: ', john, mary, joe);

let age = [30, 26, 27];
let [jack, marge, jim] = age;
console.log('Using Destructuring to assign variables: ', jack, marge, jim);

// Destructuring Objects
let jobs = {
    mike: 'designer',
    jill: 'coder',
    scott: 'chef',
};
let {mike, jill, scott} = jobs;
console.log('Jobs have been assigned to names: ', mike, jill, scott);

// Destructuring Sunsets
let lang = ['english', 'french', 'swedish', 'japanese', 'arabic'];
let [scottNative, scottOther] = lang;
console.log('This will assign index 0 and 1 to the two new variables: ',scottNative, scottOther);

let [, , jillNative,, jillOther] = lang;
console.log('Use comma to skip an index: ',jillNative, jillOther);

let lang2 = {
    firstL: 'english',
    secondL: 'spanish',
    thirdL: 'swedish',
    fourthL: 'french',
};

let { firstL, thirdL} = lang2
console.log('Destructuring objects: ',firstL, thirdL);

// Using ...rest
let fruits = ['apple', 'orange', 'banana', 'cherry'];
let [favourite, secondfav, ...others] = fruits
console.log(favourite);
console.log(secondfav);
console.log('...rest combines remaining values into its own variable: ',others);

let people = {
    scotty: 'chips',
    brian: 'veggies',
    magnus: 'beer',
    susanna: 'Flaskfile',
};
let {scotty, brian,...rest} = people;
console.log(scotty);
console.log(brian);
console.log('Destructured object with ...rest: ',rest);



//------------------------------------ map() executes on all elements


let number = [1, 2, 3, 4, 5];

// Using a for loop

let results = [];
for (let num of number){
    results.push(num * 2);
}
console.log('Standard loop to multiple numbers: ',results);

// Using map() method
const multiply = function(number){
    return number * 2;
}
const mapResults = number.map(multiply);
console.log('Result using map(): ',mapResults);

// Simplified map()
const simplified = number.map(function(number){return number * 2})
console.log('Less verbose code for map() with function: ',simplified);

// Simplfied with arrow function
const simple = number.map(number => number * 2);
console.log('Simple map() arrow function: ',simple);

// More advanced with Objects

const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];
  
  const studentsWithId = students.map(student => [student.name, student.id]);
  console.log('Using map() to identify data in objects: ',studentsWithId)
  


//----------------------------------------- filter() True or False 



// Simple Filtering
const people1 = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

  const legalAge = people1.filter(person => person.age >= 21);
  console.log('filter() method to find True values of conditional: ',legalAge);

  const paul = people1.filter(p => p.name === 'Paul')[0];
  console.log('return just the object, not an array with filter(): ',paul);

  
  
  // Complex Filtering
  const kids = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

  const hasFiveYrsEx = skill => skill.yrsExperience >= 5;
  const hasStrongSkills = kid => kid.skills.filter(hasFiveYrsEx).length > 0;
  const candidates = kids.filter(hasStrongSkills);
  
  console.log('complex filter with multiple parameters(): ',candidates);
  
  const namecandidate = candidates.map(kid => [kid.name]);
  console.log('return just names from filter() result using map(): ',namecandidate);



//-------------------------------------------------- reduce()

// Summing an array of numbers
console.log('Shows how acc and curr work in reduce(): ')
const num1 = [0, 1, 2 ,3, 4];
let totalNum = num1.reduce((acc, curr) => {
  console.log(
    'Accumulator:', acc,
    'Current Value:', curr,
    'Total Value:', acc + curr
);
return acc + curr;
  });


// acc = accumulator and keep track of sum
// curr = currentValue
console.log('Accumulates all numbers in array with reduce(): ',totalNum);




const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too


