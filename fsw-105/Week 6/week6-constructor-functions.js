


function EmployeeInfo(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = 'Full Time';
}

EmployeeInfo.prototype.printEmployeeForm = function() {
    console.log('Name: ' + this.name + ', Job Title: ' + this.jobTitle + ', Salary: ' + this.salary + ', Status: ' + this.status);
}


var emp1 = new EmployeeInfo('Michael', 'Regional Manager', '$5/hr');
emp1.status = 'Part Time';
emp1.printEmployeeForm();

var emp2 = new EmployeeInfo('Dwight', 'Assistant to the Regional Manager', '$2/hour');
emp2.printEmployeeForm();

var emp3 = new EmployeeInfo('Jim', 'Salesman', '$2/hour');
emp3.printEmployeeForm();

var emp4 = new EmployeeInfo('Pam', 'Receptionist', '$2/hour');
emp4.printEmployeeForm();


