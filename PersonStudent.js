"use strict";

class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get gender() {
    return this._gender;
  }
  get age() {
    return this._age;
  }
  set firstName(val) {
    if (typeof val === "string") {
      this._firstName = val;
    }
  }
  set lastName(val) {
    if (typeof val === "string") {
      this._lastName = val;
    }
  }
  set gender(val) {
    if (val === "female" || val === "male") {
      this._gender = val;
    }
  }
  set age(val) {
    if (typeof val === "number") {
      this._age = val;
    }
  }
  toString() {
    return `${this.firstName} ${this._lastName} ${this._age} years old`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, gender, age, year, fee, program) {
    super(firstName, lastName, gender, age);
    this._year = year;
    this._fee = fee;
    this._program = program;
  }
  get year() {
    return this._year;
  }
  get fee() {
    return this._fee;
  }
  get program() {
    return this._program;
  }
  set year(val) {
    if (typeof val === "number") {
      this._year = val;
    }
  }
  set fee(val) {
    if (typeof val === "number") {
      this._fee = val;
    }
  }
  set program(val) {
    if (typeof program === "object") {
      this._program = val;
    }
  }
  passExam(programName, grade) {
    let passedExams = this._program.reduce((acc, currentVal) => {
      if (programName === currentVal.programName && grade >= 50) {
        return acc;
      } else if (programName === currentVal.programName && grade < 50) {
        currentVal.grade = grade;
        acc.push(currentVal);
        return acc;
      } else {
        acc.push(currentVal);
        return acc;
      }
    }, []);
    this._program = passedExams;
    //return passedExams;
  }
  isAllPassed() {
    if (this._program.length === 0) {
      this._year++;
      return `${this._firstName} ${this.lastName} passes all exams`;
    } else {
      return `${this._firstName} ${this.lastName} doesn't pass all exams`;
    }
  }
}

let program1 = [
  { programName: "math", grade: "undefined" },
  { programName: "english", grade: "undefined" },
  { programName: "biology", grade: "undefined" },
  { programName: "biology", grade: "undefined" },
  { programName: "biology", grade: "undefined" },
];

let person1 = new Student("Ross", "Bing", "male", 23, 2000, 1250, program1);
console.log(person1.passExam("math", 70));
console.log(person1.passExam("english", 40));
console.log(person1.program);
console.log(person1.year);
console.log(person1.isAllPassed());
console.log(person1.year);
