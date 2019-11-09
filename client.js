console.log('JS');

$(document).ready(onReady);

//The application should have an input form that collects employee first name, last name, 
//ID number, job title, annual salary.

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
        Salary: $('#in-salary').val()
    } //end object
    // make an object into array
    employees.push(newEmployee);
    console.log('array:', employees);
    
    $('#in-first').val(''),
    $('#in-last').val(''),
    $('#in-id').val(''),
    $('#in-title').val(''),
    $('#in-salary').val('')


    showMovies(movies);

}    

//A 'Submit' button should collect the form information, store the information to calculate
// monthly costs, append information to the DOM and clear the input fields.Using the stored 
//information, calculate monthly costs and append this to the to DOM.If the total monthly 
//cost exceeds $20, 000, add a red background color to the total monthly cost.

//Create a delete button that removes an employee from the DOM.For Base mode, it does not need
//to remove that Employee's salary from the reported total.