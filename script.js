
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addStudent(); 
});
function addStudent() {
    let studentName = document.getElementById('studentName').value;
    let studentId = document.getElementById('studentId').value;
    let emailId = document.getElementById('emailId').value;
    let contactNo = document.getElementById('contactNo').value;
    let newRow = document.createElement('tr');
    let nameCell = document.createElement('td');
    nameCell.textContent = studentName;
    let idCell = document.createElement('td');
    idCell.textContent = studentId;
    let emailCell = document.createElement('td');
    emailCell.textContent = emailId;
    let contactCell = document.createElement('td');
    contactCell.textContent = contactNo;

    let actionsCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        deleteStudent(newRow); 
    });

    actionsCell.appendChild(deleteButton);
    newRow.appendChild(nameCell);
    newRow.appendChild(idCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(contactCell);
    newRow.appendChild(actionsCell);
    document.getElementById('recordsTableBody').appendChild(newRow);
    // document.getElementById('registrationForm').reset();
}
function deleteStudent(studentRow) {
    document.getElementById('recordsTableBody').removeChild(studentRow);
}

