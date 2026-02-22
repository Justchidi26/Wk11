//It is a function whose result is futuristic expectation
//Promise Basics

/*
Return new Promise((resolve)=>{})
*/

// function delay(ms){
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`Waited ${ms}ms`), ms);
//     });
// }

// delay(200).then((response) => {
//     console.log(response);
// });
// console.log("In the mean time, we continue other things");

// function greet(name, ms = 2000) {
//   return new Promise((resolve, reject) => {
//     if (ms < 4000) {
//       reject("Time must be up to 4 seconds");
//     }
//     setTimeout(() => {
//       resolve(`Hello, ${name}`);
//     }, ms);
//   });
// }

// greet("Peter", 1000)
//   .then((resp) => console.log(resp))
//   .catch((error) => {
//     console.log("Error: " + error);
//     return greet("Terra", 4000);
//   })
//   .then((resp) => console.log(resp))
//   .finally(() => {
//     console.log("Hmmm... finally it's over");
//   });

// console.log("Waiting for the response oooo....");
// setTimeout(() => console.log("We're still waiting oooo...."), 2000);


function mightFail(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error("Boom! Something went wrong."));
      else resolve("All good.");
    }, 100);
  });
}

mightFail(false)
  .then((resp) => {
    console.log("Success:", resp);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });


mightFail(true)
  .then((resp) => {
    console.log("Success:", resp);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });



