interface Student {
  firstName: string;
  lastName: string;
    age: number;
    location: string;
    }   
  
const student1: Student = {
  firstName: "Geval",
  lastName: "Egbe",
  age: 20,
  location: "Lagos"
};
  
const student2: Student = {
  firstName: "Lydia",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};
    
    const studentsList: Student[] = [student1, student2];
    
    console.log(studentsList);

    export {};
// Assuming you want to log the students in a table format
console.table(studentsList);

// Create table and header
const table: HTMLTableElement = document.createElement('table');
const thead = table.createTHead();
const headerRow = thead.insertRow();
['First Name', 'Location'].forEach(text => {
  const th = document.createElement('th');
  th.textContent = text;
  headerRow.appendChild(th);
});

// Create table body
const tbody = table.createTBody();

// Insert rows for each student
studentsList.forEach(student => {
  const row = tbody.insertRow();
  
  const cellFirstName = row.insertCell();
  cellFirstName.textContent = student.firstName;

  const cellLocation = row.insertCell();
  cellLocation.textContent = student.location;
});

// Append table to the body
document.body.appendChild(table);
