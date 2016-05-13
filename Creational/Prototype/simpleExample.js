// In javascript this is vary simple, by just using the prototype..
var blueprint = function bluePrintObject() {
  this.method = function someFunction() {
    console.log("blueprint method");
  };
};

function NewObject() {
  this.name = 'testing';
}
NewObject.prototype = new blueprint();

var testObject = new NewObject();
testObject.method(); 

// a different implementation
var copyMe = {
  name: "TOM",
  say: function () {
    console.log("I am TOM");
  }
};
 
// A second way to do it!
// The Object.create() method creates a new object with the specified prototype object
// and properties.
var tom = Object.create( copyMe );

console.log(tom);
console.log(tom.prototype);
// Now we can see that one is a prototype of the other
console.log(tom.name);

//a prototype like inheritance example, from essentialjsdesignpatterns book
var vehicle = {
  getModel: function () {
    console.log( "The model of this vehicle is.." + this.model );
  }
};
 
// inheritance
var car = Object.create(vehicle, {
  "id": {
    value: "kjkj",
    enumerable: true
  },
 
  "model": {
    value: "Ford",
    enumerable: true
  }
});

car.getModel();