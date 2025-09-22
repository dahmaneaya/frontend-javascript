// task_0/js/main.ts

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "California"
};

const studentsList: Array<Student> = [student1, student2];

const body = document.body;
const table = document.createElement('table');

table.style.borderCollapse = 'collapse';
table.style.width = '100%';
table.style.margin = '20px 0';

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');

firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

firstNameHeader.style.border = '1px solid #ddd';
firstNameHeader.style.padding = '12px';
firstNameHeader.style.backgroundColor = '#f2f2f2';

locationHeader.style.border = '1px solid #ddd';
locationHeader.style.padding = '12px';
locationHeader.style.backgroundColor = '#f2f2f2';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');

studentsList.forEach((student: Student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  
  firstNameCell.style.border = '1px solid #ddd';
  firstNameCell.style.padding = '12px';
  
  locationCell.style.border = '1px solid #ddd';
  locationCell.style.padding = '12px';
  
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
body.appendChild(table);

const title = document.createElement('h1');
title.textContent = 'Student List';
title.style.textAlign = 'center';
title.style.color = '#333';
body.insertBefore(title, table);