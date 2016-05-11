// from Head First:
//  The Abstract Factory Pattern provides an interface 
//  for creating families of related or dependent objects 
//  without specifying their concrete classes. 

// AbstractFactory only declares an interface for creating products. It's up to ConcreteProduct subclasses to actually create them. 

// With the Factory pattern, you produce implementations (Apple, Banana, Cherry, etc.) of a particular interface -- say, IFruit.
// With the Abstract Factory pattern, you produce implementations of a particular Factory interface -- e.g., IFruitFactory. 
// Each of those knows how to create different kinds of fruit.

// in javascript the super class is not used beacause the dynamic typing of the language.
// you need only the concrete classes

// Abstract Factory classes are often implemented with Factory Methods, but they can also be implemented using Prototype.

//A example from http://www.dofactory.com/javascript/abstract-factory-design-pattern
function Employee(name) {
  this.name = name;
  this.say = function () {
    console.log("I am a Employee");
  };
}
 
function EmployeeFactory() {
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

// a vary different implimentation who use the dynamic typing
console.log("--------------");
// A constructor for defining new cars
function Car( options ) {
   // some defaults
  this.doors = options.doors || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
}

Car.prototype.drive = function(){
  console.log("CAR DRIVE")
}
Car.prototype.breakDown = function(){
  console.log("CAR breakDown")
}
 
// A constructor for defining new trucks
function Truck( options){
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

Truck.prototype.drive = function(){
  console.log("Truck DRIVE")
}
Truck.prototype.breakDown = function(){
  console.log("Truck breakDown")
}

// A nice abstract factory pattern from the book of essential js design patterns from addyosmani.com
var abstractVehicleFactory = (function () {
  // Storage for our vehicle types
  var types = {};
 
  return {
    getVehicle: function ( type, customizations ) {
      var Vehicle = types[type];

      return (Vehicle ? new Vehicle(customizations) : null);
    },
    // registry a new factory!
    registerVehicle: function ( type, Vehicle ) {
      var proto = Vehicle.prototype;

      // only register classes that fulfill the vehicle contract
      if ( proto.drive && proto.breakDown ) {
          types[type] = Vehicle;
      }

      return abstractVehicleFactory;
    }
  };
})();
// Usage:
 
abstractVehicleFactory.registerVehicle( "car", Car );
abstractVehicleFactory.registerVehicle( "truck", Truck );
 
// Instantiate a new car based on the abstract vehicle type
var car = abstractVehicleFactory.getVehicle( "car", {
            color: "lime green",
            state: "like new" } );

console.log(car);
console.log("is car instance of Car :", car instanceof Car);
car.breakDown();
// Instantiate a new truck in a similar manner
var truck = abstractVehicleFactory.getVehicle( "truck", {
            wheelSize: "medium",
            color: "neon yellow" } );

console.log(truck);
console.log("is truck instance of Truck :", car instanceof Car);
truck.breakDown();