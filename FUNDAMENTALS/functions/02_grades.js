function solve(grade) {
    if (grade >=2 && grade <=2.99){
        return 'Fail' + ' ' +`(${grade.toFixed(2)})`;
    }else if (grade >=3 && grade <= 3.49){
        return 'Poor'+ ' ' +`(${grade.toFixed(2)})`;
    }else if (grade >= 3.5 && grade <= 4.49){
        return 'Good'+ ' ' +`(${grade.toFixed(2)})`;
    }else if (grade>=4.5 && grade<=5.49){
        return 'Very good'+ ' ' +`(${grade.toFixed(2)})`;
    }else if (grade>=5.5 && grade<=6){
        return 'Excellent'+ ' ' +`(${grade.toFixed(2)})`;
    }

}
let res = solve(2.99)

console.log(res);