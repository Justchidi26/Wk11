// // //Template literals
// // const firstName = "Ada";
// // const lastName = "Udi";


// // console.log(firstName);
// // console.log(lastName);

// function varScopeDemo() {
//     //var is function-scoped (NOT block-scoped)
//     for (var i = 0; i < 3; i += 1) {

//     }
//     //i still exists here - can cause accidental bugs
//     return i
// }
// console.log(varScopeDemo()); //DON"T FORGET TO CALL A FUNCTION WITH "()"


// function letScopeDemo(){
//     //let is block-scoped
//     for (let i = 0; i < 3; i += 1){
//         return i;

//     }
//     //i does NOT exist here
//     //return i; //Uncomment to see Reference Error
//     // return "i is not accessible outside the loop block";
// }

// console.log(letScopeDemo());


