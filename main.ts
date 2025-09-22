interface Student {
  firstName: string;   // Must be a string
  lastName: string;    // Must be a string  
  age: number;         // Must be a number
  location: string;    // Must be a string
}

// STEP 2: Create the first student
// TypeScript will check that this object matches the Student interface
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

// STEP 3: Create the second student
const student2: Student = {
  firstName: "Jane", 
  lastName: "Smith",
  age: 22,
  location: "California"
};

// STEP 4: Create an array to hold our students
// Array<Student> means "an array that can only contain Student objects"
const studentsList: Array<Student> = [student1, student2];

// STEP 5: Create the HTML table using DOM manipulation
// First, let's get the document body where we'll add our table
const body = document.body;

// Create the main table element
const table = document.createElement('table');

// Let's add some basic styling to make it look nice
table.style.borderCollapse = 'collapse';
table.style.width = '100%';
table.style.margin = '20px 0';

// STEP 6: Create table header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

// Create header cells
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');

// Add text content to headers
firstNameHeader.textContent = 'First Name';
locationHeader.textContent = 'Location';

// Add some styling to headers
firstNameHeader.style.border = '1px solid #ddd';
firstNameHeader.style.padding = '12px';
firstNameHeader.style.backgroundColor = '#f2f2f2';

locationHeader.style.border = '1px solid #ddd';
locationHeader.style.padding = '12px';
locationHeader.style.backgroundColor = '#f2f2f2';

// Put it all together
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);
table.appendChild(thead);

// STEP 7: Create table body and add student rows
const tbody = document.createElement('tbody');

// Loop through each student and create a table row
studentsList.forEach((student: Student) => {
  // Create a new row for this student
  const row = document.createElement('tr');
  
  // Create cells for first name and location
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  
  // Add the student data to the cells
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  
  // Add some styling to the cells
  firstNameCell.style.border = '1px solid #ddd';
  firstNameCell.style.padding = '12px';
  
  locationCell.style.border = '1px solid #ddd';
  locationCell.style.padding = '12px';
  
  // Add the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  
  // Add the row to the table body
  tbody.appendChild(row);
});

// STEP 8: Add the tbody to the table and the table to the page
table.appendChild(tbody);
body.appendChild(table);

// STEP 9: Add a title to our page
const title = document.createElement('h1');
title.textContent = 'Student List';
title.style.textAlign = 'center';
title.style.color = '#333';
body.insertBefore(title, table);