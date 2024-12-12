// Defining the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Creating two students
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

// Creating an array containing the students
const studentsList: Student[] = [student1, student2];

// Rendering a table using Vanilla JavaScript
const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
