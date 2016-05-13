var Shipping = function() {
    this.company = "";// maintains a reference to the current Strategy object
};
 
Shipping.prototype = {
  // allows clients to change Strategy
  setStrategy: function(company) {
    this.company = company;
  },
  // supports interface to allow clients to request Strategy calculations
  calculate: function(package) {
    return this.company.calculate(package);
  }
};
 
// the three next are implements the algorithm using the Strategy interface
var UPS = function() {
  this.calculate = function(package) {
    // calculations...
    return "$45.95";
  }
};
 
var USPS = function() {
  this.calculate = function(package) {
    // calculations...
    return "$39.40";
  }
};
 
var Fedex = function() {
  this.calculate = function(package) {
    // calculations...
    return "$43.20";
  }
};
 
var package = { from: "76712", to: "10012", weigth: "lkg" };
// the 3 strategies
var ups = new UPS();
var usps = new USPS();
var fedex = new Fedex();

var shipping = new Shipping();

shipping.setStrategy(ups);
console.log("UPS Strategy: " + shipping.calculate(package));
shipping.setStrategy(usps);
console.log("USPS Strategy: " + shipping.calculate(package));
shipping.setStrategy(fedex);
console.log("Fedex Strategy: " + shipping.calculate(package));
