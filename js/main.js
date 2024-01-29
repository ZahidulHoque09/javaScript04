/** Making of gradesheet */

let input = prompt("Enter your obtained marks:");
let marks = +input;

if (marks >= 80 && marks <= 100) {
  console.log("Your obtained grade is: +A");
} else if (marks >= 75 && marks <= 79) {
  console.log("Your obtained grade is: -A");
} else if (marks >= 70 && marks <= 74) {
  console.log("Your obtained grade is: A");
} else if (marks >= 65 && marks <= 69) {
  console.log("Your obtained grade is: +B");
} else if (marks >= 60 && marks <= 64) {
  console.log("Your obtained grade is: B");
} else if (marks >= 55 && marks <= 59) {
  console.log("Your obtained grade is: -B");
} else if (marks >= 50 && marks <= 54) {
  console.log("Your obtained grade is: C");
} else if (marks >= 45 && marks <= 49) {
  console.log("Your obtained grade is: D");
} else if (marks >= 40 && marks <= 44) {
  console.log("Your obtained grade is : E");
} else if (marks >= 0 && marks <= 39) {
  console.log("Your obtained grade is: F");
} else {
  console.log("Wrong input:");
}
