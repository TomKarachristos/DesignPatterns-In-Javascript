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