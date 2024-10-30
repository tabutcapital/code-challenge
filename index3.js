

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateNetSalary(basicSalary, benefits) {
    const NSSF_RATE = 0.06;
    const NSSF_LIMIT = 1800;

    const grossSalary = basicSalary + benefits;

    function calculateTax(grossSalary) {
        if (grossSalary <= 24000) return grossSalary * 0.1;
        else if (grossSalary <= 32333) return 2400 + (grossSalary - 24000) * 0.25;
        else return 4483.25 + (grossSalary - 32333) * 0.3;
    }

    const paye = calculateTax(grossSalary);

    function calculateNHIF(grossSalary) {
        if (grossSalary <= 5999) return 150;
        else if (grossSalary <= 7999) return 300;
        else if (grossSalary <= 11999) return 400;
        else if (grossSalary <= 14999) return 500;
        else if (grossSalary <= 19999) return 600;
        else if (grossSalary <= 24999) return 750;
        else if (grossSalary <= 29999) return 850;
        else if (grossSalary <= 34999) return 900;
        else if (grossSalary <= 39999) return 950;
        else if (grossSalary <= 44999) return 1000;
        else if (grossSalary <= 49999) return 1100;
        else if (grossSalary <= 59999) return 1200;
        else if (grossSalary <= 69999) return 1300;
        else if (grossSalary <= 79999) return 1400;
        else if (grossSalary <= 89999) return 1500;
        else if (grossSalary <= 99999) return 1600;
        else return 1700;
    }

    const nhif = calculateNHIF(grossSalary);
    const nssf = Math.min(grossSalary * NSSF_RATE, NSSF_LIMIT);
    const netSalary = grossSalary - (paye + nhif + nssf);

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${paye}`);
    console.log(`NHIF Deduction: ${nhif}`);
    console.log(`NSSF Deduction: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}
rl.question("Enter the basic salary: ", (basicSalary) => {
    rl.question("Enter the benefits: ", (benefits) => {
        calculateNetSalary(Number(basicSalary), Number(benefits));

    });
});

  
  