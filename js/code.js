//CONSOLE VERSION
// let userName = prompt('Enter Name:');
// let userSurname = prompt('Enter Surname:');
// let userSalary = prompt('Enter Salary:');


// let salarySum = eval (userSalary) + 500;
// console.log(`Name:${userName}`);
// console.log(`Surname:${userSurname}`);
// console.log(`Salary:${salarySum}`);


// DOCUMENT VERSION
let firstName = prompt("Enter Name");
let surName = prompt("Enter Surname");
let salary = prompt("Enter Salary");
let bonus = 500;

let finalSalary = eval(`${salary}+${bonus}`);
document.write(`
     Name: ${firstName} <br>
     Surname:  ${surName} <br>
     Salary: ${finalSalary}
`)




