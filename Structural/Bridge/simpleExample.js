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
// from BridgeClass.w