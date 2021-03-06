function solve(input) {
    let students = new Map();
    for (const line of input) {
        let lineArr = line.split(' ');
        let name = lineArr.shift();
        let grades = lineArr.map(x => Number(x));
        // or let grades = lineArr.map(Number);
        if (students.has(name)) {
            let oldGrades = students.get(name);
            let allGrades = oldGrades.concat(grades);
            students.set(name, allGrades);

        } else {
            students.set(name, grades);
        }
    }

    let studentEntries = Array.from(students.entries());
    let sortedStudents = studentEntries.sort((a, b) => {

        let studentGradesA = a[1];

        let studentGradesB = b[1];
        let averageGradesA = getAverageGrade(studentGradesA);
        let averageGradesB = getAverageGrade(studentGradesB);
        return averageGradesA - averageGradesB;
    });

    function getAverageGrade(grades) {
        let gradesSum = 0;
        for (const grade of grades) {
            gradesSum += grade;
        }
        return gradesSum / grades.length;
    }

    for(let el of sortedStudents){
        console.log(`${el[0]}: ${el[1].join(", ")}`);
    }


}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])