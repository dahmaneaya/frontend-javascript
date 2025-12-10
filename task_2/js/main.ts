// 0x04-TypeScript/task_2/js/main.ts
// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function createEmployee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number') {
    if (salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  return new Director();
}

// ---------- Example Usage ----------
console.log(createEmployee(200));    // Teacher
console.log(createEmployee(1000));   // Director
console.log(createEmployee("$500")); // Director

// Type predicate
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Example usage
console.log(executeWork(createEmployee(200)));  // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

// Interface for Subjects
// interface Subjects {
//   math(): string;
//   history(): string;
// }

// ---- Task 7 ----

// String literal type
type Subjects = "Math" | "History";

// Function teachClass
function teachClass(todayClass:Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// Example usage
console.log(teachClass("Math"));     // Teaching Math
console.log(teachClass("History"));  // Teaching History

export {};

