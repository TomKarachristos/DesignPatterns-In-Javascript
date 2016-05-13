var Employee = function (name, salary, vacation) {
  var self = this;
  // defines an accept method that accepts visitor objects
  this.accept = function (visitor) {
    // in the accept method the visitor's visit method is invoked 
    //with 'this'(Self here) as a parameter
    visitor.visit(self);
  };

  this.getName = function () {
    return name;
  };

  this.getSalary = function () {
    return salary;
  };

  this.setSalary = function (sal) {
    salary = sal;
  };

  this.getVacation = function () {
    return vacation;
  };

  this.setVacation = function (vac) {
    vacation = vac;
  };
};
 
var ExtraSalary = function () {
  // implements a visit method. The argument is the Element being visited. 
  // This is where the Element's changes are made
  this.visit = function (emp) {
    emp.setSalary(emp.getSalary() * 1.1);
  };
};
 
var ExtraVacation = function () {
  // implements a visit method. The argument is the Element being visited. 
  // This is where the Element's changes are made
  this.visit = function (emp) {
    emp.setVacation(emp.getVacation() + 2);
  };
};
        
// maintains a collection of Elements which can be iterated over
var employees = [
  new Employee("John", 10000, 10),
  new Employee("Mary", 20000, 21),
  new Employee("Boss", 250000, 51)
];

var visitorSalary = new ExtraSalary();
var visitorVacation = new ExtraVacation();
    
for (var i = 0, len = employees.length; i < len; i++) {
  var emp = employees[i];
      
  emp.accept(visitorSalary);
  emp.accept(visitorVacation);
  console.log(emp.getName() + ": $" + emp.getSalary() +
      " and " + emp.getVacation() + " vacation days");
}
