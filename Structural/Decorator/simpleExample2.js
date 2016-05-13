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