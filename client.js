console.log('JS');

$(document).ready(onReady);

function onReady() {
    $('#add-employee').on('click', addNewEmployee);
    $('#add-employee').on('click', totalMonthly);
} //end onReady

//The application should have an input form that collects employee first name, last name, 
//ID number, job title, annual salary.

//A 'Submit' button should collect the form information, store the information to calculate
// monthly costs, append information to the DOM and clear the input fields.

//Make array
let employees = [];

// Take input from the form & put into array
function addNewEmployee(event) {
    console.log('in addNewEmployee');
    // prevents page from refreshing using form tags
    event.preventDefault();
    //get info from form
    let newEmployee = {
        first: $('#in-first').val(),
        last: $('#in-last').val(),
        id: $('#in-id').val(),
        title: $('#in-title').val(),
        salary: $('#in-salary').val()
    } //end object
    // make an object into array
    employees.push(newEmployee);
    console.log('array:', employees);
    
    $('#in-first').val(''),
    $('#in-last').val(''),
    $('#in-id').val(''),
    $('#in-title').val(''),
    $('#in-salary').val('')

    showEmployees(employees);
} // end addNewEmplopyee    

// Show all the employees on the DOM
function showEmployees(array) {
    console.log('in showEmployees');
    
    // empty out all the movies from the table
    $('#employee-table').empty();
    // loop through the array
    for (let employee of array) {
        //for each movie append a list item with title and genre
        $('#employee-table').append(`<tr><td>${employee.first}</td>, <td>${employee.last}</td>,
            <td>${employee.id}</td>, <td>${employee.title}</td>, <td>${employee.salary}</td>`);
    }
}   

//Using the stored information, calculate monthly costs and append this to the to DOM.If the 
//total monthly cost exceeds $20, 000, add a red background color to the total monthly cost.

function totalMonthly() {
    console.log('in totalMonthly');
    let count = 0;
    for (let i=0; i < employees.length; i++) {
        count += employees[i].salary;
    } // end for
    $('#sumTotal').empty();
    $('#sumTotal').text(count);    
}// end totalMonthly



//Create a delete button that removes an employee from the DOM.For Base mode, it does not need
//to remove that Employee's salary from the reported total.