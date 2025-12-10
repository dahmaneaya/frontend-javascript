// task_1/js/main.ts

// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Director interface extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation (must be a function declaration, not arrow)
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// StudentClass implementation
class StudentClass {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.lastName + this.firstName; // Corrected to return lastName + firstName
  }
}

// ---------- Example Usage ----------

const teacher1: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  location: "London",
  contract: true,
};

const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "Paris",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: J. Doe
const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName());      // Alice
console.log(student.workOnHomework());   // Currently working
