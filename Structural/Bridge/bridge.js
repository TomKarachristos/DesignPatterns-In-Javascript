// bridge decouple an abstraction from its implementation so that the two can vary independently.

// input devices, implements and extends the interface defined by Abstraction
// Abstraction: is not used in JavaScript cause the dynamic type.

// here is a clean implementation for understanding the use. 
var Class1 = function(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

var Class2 = function(d) {
  this.d = d;
};

// Its look like a adapter but there is no real client that is expecting any data.
// It’s simply helping to take in a larger set of data, sending it off to the
// responsible parties.
var BridgeClass = function(a, b, c, d) {
  this.one = new Class1(a, b, c);
  this.two = new Class2(d);
};

// One can argue that this bridge was introduced solely for convenience, effectively making
// it a facade. But unlike a facade, it is being used so that Class1 and Class2 can vary independently
// from BridgeClass. 

// from http://www.dofactory.com/javascript/bridge-design-pattern

// input and output devices can vary independently (without changes to the code)
// the devices are loosely coupled by two levels of abstraction.
var Gestures = function (output) {
  this.output = output;

  this.tap = function () { this.output.click(); }
  this.swipe = function () { this.output.move(); }
  this.pan = function () { this.output.drag(); }
  this.pinch = function () { this.output.zoom(); }
};
 
var Mouse = function (output) {
  this.output = output;

  this.click = function () { this.output.click(); }
  this.move = function () { this.output.move(); }
  this.down = function () { this.output.drag(); }
  this.wheel = function () { this.output.zoom(); }
};
 
// output devices
// implements the Implementor interface and defines its effects
var Screen = function () {
  this.click = function () { console.log("Screen select"); }
  this.move = function () { console.log("Screen move"); }
  this.drag = function () { console.log("Screen drag"); }
  this.zoom = function () { console.log("Screen zoom in"); }
};
 
var Audio = function () {
  this.click = function () { console.log("Sound oink"); }
  this.move = function () { console.log("Sound waves"); }
  this.drag = function () { console.log("Sound screetch"); }
  this.zoom = function () { console.log("Sound volume up"); }
};
 
var screen = new Screen();
var audio = new Audio();

var hand = new Gestures(screen);
var mouse = new Mouse(audio);

hand.tap();
hand.swipe();
hand.pinch();

mouse.click();
mouse.move();
mouse.wheel();


