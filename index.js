

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const students = [];

function studentGrades() {
    rl.question("Enter the student's name (or type 'done' to finish): ", (name) => {
        if (name.toLowerCase() === 'done') {
            displaystudentGrades();
            rl.close();
            return;
        }

        rl.question(`Enter the marks for ${name} (between 0 and 100): `, (mark) => {
            mark = parseFloat(mark);

            if (isNaN(mark) || mark < 0 || mark > 100) {
                console.log("Invalid input. Please enter a number between 0 and 100.");
                studentGrades();
            } else {
                let grade;
                if (mark > 79) grade = "A";
                else if (mark >= 60) grade = "B";
                else if (mark >= 50) grade = "C";
                else if (mark >= 40) grade = "D";
                else grade = "E";

                students.push({ name, mark, grade });
                studentGrades();
            }
        });
    });
}

function displaystudentGrades() {
    console.log("Student Grades:");
    console.log("---------------");
    students.forEach(student => {
        console.log(`Name: ${student.name}, Marks: ${student.mark}, Grade: ${student.grade}`);
    });
}


studentGrades();

  

        