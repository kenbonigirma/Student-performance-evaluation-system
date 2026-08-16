// ===== STUDENT INFORMATION =====
const fullName = " Kenboni Girma ";
const age = 21;
const course = "JavaScript";
const score = 85;
const attendance = 80;
const academyName = "Nexus Academy"; // Global


// ===== B. DISPLAY STUDENT INFO FUNCTION =====
function displayStudentInfo(name, age, course, score, attendance) {
  const clean = name.trim();
  
  return `
Student Information
Name: ${clean}
Age: ${age}
Course: ${course}
Score: ${score}
Attendance: ${attendance}%`;
}

console.log(displayStudentInfo(fullName, age, course, score, attendance));


// ===== C. GRADE CALCULATOR (Arrow Function) =====
const calculateGrade = (score) => {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
};


// ===== D. PERFORMANCE STATUS =====
function getStudentStatus(score) {
  if (score >= 90) return "Excellent Performance";
  if (score >= 60) return "Passed";
  return "Failed";
}


// ===== E. EXAM ELIGIBILITY =====
function checkEligibility(score, attendance) {
  if (score >= 50 && attendance >= 75) {
    return "Eligible for Exam";
  }
  return "Not Eligible for Exam";
}


// ===== F. TERNARY OPERATOR =====
const passFail = score >= 60 ? "Passed" : "Failed";
console.log("Result:", passFail);


// ===== G. STRING PROCESSING =====
console.log("--- STRING PROCESSING ---");
const clean = fullName.trim();
console.log("Trim:", clean);
console.log("Uppercase:", clean.toUpperCase());
console.log("Lowercase:", clean.toLowerCase());
console.log("Includes Kenboni:", clean.includes("Kenboni"));
console.log("Starts with K:", clean.startsWith("K"));
console.log("Slice 0-5:", clean.slice(0, 5));


// ===== H. LOOP =====
console.log("--- LOOP ---");
for (let i = 1; i <= 5; i++) {
  console.log(`Step ${i} completed.`);
}


// ===== I. SCOPE =====
console.log("--- SCOPE ---");
console.log("Global:", academyName); // Global scope

function showScope() {
  const message = "In function"; // Function scope
  console.log(message);
}
showScope();

if (true) {
  const blockMsg = "In block"; // Block scope
  console.log(blockMsg);
}


// ===== J. FINAL REPORT =====
console.log("--- FINAL REPORT ---");
const g = calculateGrade(score);
const st = getStudentStatus(score);
const elig = checkEligibility(score, attendance);

const report = `
-----------------------------------
STUDENT PERFORMANCE REPORT
-----------------------------------
Name: ${clean}
Age: ${age}
Course: ${course}
Score: ${score}
Grade: ${g}
Status: ${st}
Attendance: ${attendance}%
Eligible: ${elig}
Result: ${passFail}
----------------------------------`;

console.log(report);