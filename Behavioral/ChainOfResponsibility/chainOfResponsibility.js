// from http://www.dofactory.com/javascript/chain-of-responsibility-design-pattern

// skeleton 
var chaining = {
  do: function(){
    // code here...
    return this;
  },
  stuff: function(){
    // and here...
    return this;
  }
}
chaining.do().stuff()

// A real example
// initiates the request to a chain of handler objects
var Request = function(amount) {
  this.amount = amount;
  console.log("Requested: $" + amount + "\n");
}
 
// defines an interface for handling the requests
// implements the successor link (returning 'this')
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

console.log("---------");
// A different implemintation using stack data structure
// from https://www.joezimjs.com/javascript/javascript-design-patterns-chain-of-responsibility/
var MoneyStack = function(billSize) {
  this.billSize = billSize;
  this.next = null;
}

MoneyStack.prototype = {
  withdraw: function(amount) {
    var numOfBills = Math.floor(amount / this.billSize);
    if (numOfBills > 0) {
      // Eject the bills
      this._ejectMoney(numOfBills);
      // Shrink the amount by how much money we ejected
      amount = amount - (this.billSize * numOfBills);
    }

    // If there is any money left to withdraw and if we have
    // another stack in the line, pass the request on
    amount > 0 && this.next && this.next.withdraw(amount);
  },
  // set the stack that comes next in the chain
  setNextStack: function(stack) {
    this.next = stack;
  },
  // private method that ejects the money
  _ejectMoney: function(numOfBills) {
    console.log(numOfBills + " $" + this.billSize
        + " bill(s) has/have been spit out");
  }
}

var ATM = function() {
    // Create the stacks of money
    // We'll show you the implementation for this next
    var stack100 = new MoneyStack(100),
        stack50 = new MoneyStack(50),
        stack20 = new MoneyStack(20),
        stack10 = new MoneyStack(10),
        stack5 = new MoneyStack(5),
        stack1 = new MoneyStack(1);

    // Set the hierarchy for the stacks
    stack100.setNextStack(stack50);
    stack50.setNextStack(stack20);
    stack20.setNextStack(stack10);
    stack10.setNextStack(stack5);
    stack5.setNextStack(stack1);

    // Set the top stack as a property
    this.moneyStacks = stack100;
}

ATM.prototype.withdraw = function(amount) {
    this.moneyStacks.withdraw(amount);
}

// USAGE
var atm = new ATM();
atm.withdraw(186);
/* outputs:
    1 $100 bill(s) has/have been spit out
    1 $50 bill(s) has/have been spit out
    1 $20 bill(s) has/have been spit out
    1 $10 bill(s) has/have been spit out
    1 $5 bill(s) has/have been spit out
    1 $1 bill(s) has/have been spit out
*/
atm.withdraw(72);
/* outputs:
    1 $50 bill(s) has/have been spit out
    1 $20 bill(s) has/have been spit out
    2 $1 bill(s) has/have been spit out
*/