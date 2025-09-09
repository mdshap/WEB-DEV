const getTax = (amount, taxRate) => amount*taxRate/100;

console.log(getTax(500, 20));

const square = num => num*num;
console.log(square(5));



const employee = {
    name: 'Abul',
    designation: 'dev',
    salary: 25000,
    experience: 1
}

console.log(employee.name)

const keys=Object.keys(employee)
const values = Object.values(employee)
const entries = Object.entries(employee)