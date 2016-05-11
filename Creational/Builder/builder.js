// Separate the construction of a complex object from its representation 
// so that the same construction process can create different representations.

// here a complete example from http://www.dofactory.com/javascript/builder-design-pattern
function Shop() {
  // constructs products by using the Builder's multistep interface
  this.construct = function(builder,doors) {
    builder.step1();
    builder.step2(doors);
    return builder.get();
  }
}
 
function CarBuilder() {
  this.car = null;
  this.step1 = function() {
      this.car = new Car();
  };
  this.step2 = function(doors) {
      this.car.addParts(doors);
  };
  this.get = function() {
      return this.car;
  };
}
 
function TruckBuilder() {
    this.truck = null;
    this.step1 = function() {
        this.truck = new Truck();
    };
    this.step2 = function(doors) {
        this.truck.addParts(doors);
    };
    this.get = function() {
        return this.truck;
    };
}
 
// represents the complex objects being assembled
function Car() {
    this.doors = 0;
    this.addParts = function(doors) {
        this.doors = doors;
    };
    this.say = function() {
        console.log("I am a " + this.doors + "-door car");
    };
}
 
// represents the complex objects being assembled
function Truck() {
    this.doors = 0;
    this.addParts = function(doors) {
        this.doors = doors;
    };
    this.say = function() {
        console.log("I am a " + this.doors + "-door truck");
    };
}
 
var shop = new Shop();
var carBuilder = new CarBuilder();
var truckBuilder = new TruckBuilder();
var car = shop.construct(carBuilder,2);
var truck = shop.construct(truckBuilder,4);

car.say();
truck.say();
