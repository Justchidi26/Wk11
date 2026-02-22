const students =[
    {name: "Amina", score: 78, submitted: true},
    {name: "Bola", score: 95, submitted: true},
    {name: "Chidi", score: 92, submitted: true},
    {name: "Dami", score: 64, submitted: true},
]

const maxScore = students.filter((std) => {
    return std.score > 70;
});

console.log(maxScore);
const {name, score} = maxScore.find((s) => {
    return s.submitted;
});
console.log(name);