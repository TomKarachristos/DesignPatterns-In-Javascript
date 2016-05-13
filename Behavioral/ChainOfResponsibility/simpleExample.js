// From http://www.dofactory.com/javascript/chain-of-responsibility-design-pattern
// Initiates the request to a chain of handler objects
var Request = function(amount) {
  this.amount = amount;
  console.log("Requested: $" + amount + "\n");
}
 
// Defines an interface for handling the requests
// Implements the successor link (returning 'this')
Request.prototype = {
  get: function(bill) {
    var count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log("Dispense " + count + " $" + bill + " bills");
    return this; // this just do the magic!
  }
}

var request = new Request(378);
request.get(100).get(50).get(20).get(10).get(5).get(1);