const students =[
    {name: "Amina", score: 78, submitted: true},
    {name: "Bola", score: 95, submitted: true},
    {name: "Chidi", score: 92, submitted: false},
    {name: "Dami", score: 64, submitted: true},
]

//Using "every" to confirm if everyone has submitted.
// const allSubmitted = students.every(student => student.submitted);

// console.log(allSubmitted);

//Using AND

// let score = 0;
// let average = 0;
// for (let i = 0; i < students.length; i++){
//     score += students[i].score;

// }
// average = score / students.length;
// console.log("Total Score: ", score);
// console.log("Average: ", average);

//Using the "Reduce" function 
// (The JavaScript reduce() function takes an array and reduces it to a single value by running a function on each element and carrying forward an accumulated result.)
//It take 2 basic parameters: arrow function ((sum, student) => {sum + student.score;}) and initalized value(0)
//-callBack (arrow function): Must have 2 params: the placeholder for the last value and the next index 
//-initialValue
const totalScore = students.reduce((sum, student) => {
  return sum + student.score;
}, 0);

const average = totalScore / students.length;

console.log("Total Score:", totalScore);
console.log("Average:", average);


//Format of an arrow function
//const variable name = (parameter) => {expression}

//function callName(name){
//console.log(name);
//}


//Count how many students submitted
const submittedCount = students.reduce((count, student) => {
  if (student.submitted) {
    return count + 1;
  } 
  else {
    return count;
  }
}, 0);

console.log(submittedCount); 
