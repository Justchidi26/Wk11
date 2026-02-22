const students = [
  {name: "Amina", score: 78, submitted: true},
  {name: "Bola", score: 95, submitted: false},
  {name: "Chidi", score: 92, submitted: true},
  {name: "Dami", score: 64, submitted: true},
];

// sort descending by score
// const leaderboard = [...students].sort((a, b) => b.score - a.score); //Will give every studnt both submitted and not submitted

// const leaderboard = students
//   .filter(s => s.submitted)          
//   .sort((a, b) => b.score - a.score);

// console.log(leaderboard);

const leaderboard = [...students] //deconstruction
  .filter(s => s.submitted)          
  .sort((a, b) => b.score - a.score)
  .map((s, index) => ({
    rank: index + 1,
    name: s.name,
    score: s.score
  }));

console.log(leaderboard);
console.table(leaderboard);