const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 67]
const grades = {
    'A': 0,
    'B': 0,
    'C': 0,
    'D': 0,
    'F': 0,
} 

// How many of each grade? Accomplish this with a for..in loop.

scores.forEach(score => {
    // If the score is greater than 90, increment grades.A by 1
    if (score >= 91){
        grades.A++
    // If the score is greater than 80, increment grades.B by 1
    } else if (score >= 81) {
        grades.B++
    // If the score is greater than 70, increment grades.C by 1
    } else if (score >= 71) {
        grades.C++
    // If the score is greater than 60, increment grades.D by 1
    } else if (score >= 61) {
        grades.D++
    // If the score is greater than 50, increment grades.F by 1       
    } else grades.F++
});

console.log(grades)

// What is the lowest score? Sort the array and find out.
scores.sort();
console.log(`The lowest grade was ${scores[0]}`);

// What is the highest score?
console.log(`The highest grade was ${scores[scores.length - 1]}`);

// Which grades had the most students achieve them? 
let currentGradesCount;
let currentHighest = grades["A"]
let currentHighestCount = "A"

for (let grade in grades) {
  let currentGradesCount = grades[grade];
  if(currentGradesCount > currentHighest){
    currentHighest = currentGradesCount
    currentHighestCount = grade
  }
} 
console.log(currentHighestCount)

// Which grade had the fewest students achieve it?
let currentLowest = grades["A"]
let currentLowestCount = "A"

for (let grade in grades) {
  let currentGradesCount = grades[grade];
  if(currentGradesCount < currentLowest){
    currentLowest = currentGradesCount
    currentLowestCount = grade
  }
} 
console.log(currentLowestCount)

