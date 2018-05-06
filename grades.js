const scores = [82, 71, 62, 95, 55, 98, 86, 86, 86, 69, 72, 78, 84, 64, 58, 87, 60, 53]
const grades = {
    'A': 0,
    'B': 0,
    'C': 0,
    'D': 0,
    'F': 0,
} 

// How many of each grade? Accomplish this with a for..in loop.

for (let i = 0; i < scores.length; i++) {
    // If the score is greater than 90, increment grades.A by 1
    if (scores[i] >= 91){
        grades.A++
    // If the score is greater than 80, increment grades.B by 1
    } else if (scores[i] >= 81) {
        grades.B++
    // If the score is greater than 70, increment grades.C by 1
    } else if (scores[i] >= 71) {
        grades.C++
    // If the score is greater than 60, increment grades.D by 1
    } else if (scores[i] >= 61) {
        grades.D++
    // If the score is greater than 50, increment grades.F by 1       
    } else if (scores[i] >= 51) {
        grades.F++
    }
};

console.log(grades)

// What is the lowest score? Sort the array and find out.
scores.sort();
console.log(scores[0]);

// What is the highest score?
console.log(scores[scores.length - 1]);

// Which grades had the most students achieve them? 
// Use an if statment, and a currentGradeCount variable, in your for in 
// loop to see if the current grade's value is higher than the last one.


let previousGradeCount = 0;
let highestGradeCount = 0;
let highestGradeLetter;

for (let grade in grades) {
    currentGradeCount = grades[grade];
    
    if (currentGradeCount > previousGradeCount) {
        if (currentGradeCount > highestGradeCount) {
            highestGradeCount = currentGradeCount;
            highestGradeLetter = grade;
        }
    }

    previousGradeCount = currentGradeCount;
}

console.log("The largest grade was: " + highestGradeLetter);

// Which grade had the fewest students achieve it?
