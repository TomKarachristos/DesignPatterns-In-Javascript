// the decorator pattern (also known as Wrapper) is a design pattern
// that allows behavior to be added to an individual object, either statically or dynamically, 
// without affecting the behavior of other objects from the same class

//In another programming languages the implimentation of this have very more complicate code


// A vehicle constructor
function Vehicle( vehicleType ){
    // here we add a random vehicleType, so we decorate 
    // the vehicle with the vehicleType 
    this.vehicleType = vehicleType || "car";
    this.model = "default";
    this.license = "00000-000";
 
}
 
// Lets create a new instance of vehicle, to be decorated
var truck = new Vehicle( "truck" );
 
// New functionality we're decorating vehicle with
truck.setModel = function( modelName ){
    this.model = modelName;
};
 
truck.setColor = function( color ){
    this.color = color;
};
 
// Test the value setters and value assignment works correctly
truck.setModel( "CAT" );
truck.setColor( "blue" );
 
console.log( truck );
 
// Demonstrate "vehicle" is still unaltered
var secondInstance = new Vehicle( "car" );
console.log( secondInstance );
 
 console.log("-------");
// a second example demostrate the power of decorate
// The constructor to decorate
function MacBook() {
  this.cost = function () { return 997; };
  this.screenSize = function () { return 11.6; };
 
}
 
// Decorator 1
function memory( macbook ) {
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 75;
  };
}
 
// Decorator 2
function engraving( macbook ){
  var v = macbook.cost();
  macbook.cost = function(){
    return v + 200;
  };
}
 
// Decorator 3
function insurance( macbook ){
  var v = macbook.cost();
  macbook.cost = function(){
     return v + 250;
  };
}
 
var mb = new MacBook();
memory( mb );
engraving( mb );
insurance( mb );
 
console.log( "cost: ", mb.cost() );
console.log( mb.screenSize() );

// add more memory
memory( mb );
console.log( "cost: ", mb.cost() );