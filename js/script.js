"use strict";
//1
class Employee {
  static vacation = 18;
  constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }

  countAverageSalary() {
    let averageSalary = this.salary * 12;
    console.log(averageSalary);
  }
  get fullName() {
  console.log(`fullName: ${this.firstName} ${this.lastName}`);
  }
}
const employeeBoss = new Employee("bob", "mike", 30, "boss", 1200);
const employeeManager = new Employee("luis", "john", 25, "manager", 1000);
console.log(employeeBoss);
employeeBoss.countAverageSalary();
employeeBoss.fullName;
console.log(Employee.vacation);
console.log(employeeManager);
employeeManager.countAverageSalary();
employeeManager.fullName;
console.log(Employee.vacation);