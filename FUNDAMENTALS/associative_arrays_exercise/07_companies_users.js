function solve(input) {
    let companiesObj = {};
    input.forEach(line=>{
        let [company, employeeId] = line.split(" -> ");
        if (!companiesObj.hasOwnProperty(company)){
            companiesObj[company] = [];
            companiesObj[company].push(employeeId);
        }else {
            if(!companiesObj[company].includes(employeeId)){
                companiesObj[company].push(employeeId);
            }
        }


    })
    //console.log(companiesObj);
    for (const company of Object.keys(companiesObj).sort()){
        console.log(company);
        companiesObj[company].forEach(empl=>{
            console.log(`-- ${empl}`);
        })
    }

}

solve(['SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])