// from http://www.dofactory.com/javascript/abstract-factory-design-pattern
// the next two is the product instances being created by the factory
function Employee(name) {
  this.name = name;
  this.say = function () {
    console.log("I am a Employee");
  };
}
 
// A factory object that 'manufactures' new products
function EmployeeFactory() {
  // returns new products
  this.create = function(name) {
    return new Employee(name);
  };
}
 
function Vendor(name) {
  this.name = name;
  this.say = function () {
    console.log("I am Vendor");
  };
}
 
function VendorFactory() {
  // returns new products
  this.create = function(name) {
    return new Vendor(name);
  };
}
 
var persons = [];
var employeeFactory = new EmployeeFactory();
var vendorFactory = new VendorFactory();

persons.push(employeeFactory.create("Joan DiSilva"));
persons.push(employeeFactory.create("Tim O'Neill"));
persons.push(vendorFactory.create("Gerald Watson"));
persons.push(vendorFactory.create("Nicole McNight"));

for (var i = 0, len = persons.length; i < len; i++) {
    persons[i].say();
}