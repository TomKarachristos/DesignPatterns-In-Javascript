// from: http://www.dofactory.com/javascript/observer-design-pattern
function Click() {
  // Imaintains list of observers. Any number of Observer objects may observe a Subject
  this.handlers = [];  // observers
}
 
Click.prototype = {
  // Implements an interface that lets observer objects subscribe or unsubscribe
  subscribe: function(fn) {
    this.handlers.push(fn);
  },
  unsubscribe: function(fn) {
    this.handlers = this.handlers.filter(
        function(item) {
            if (item !== fn) {
                return item;
            }
        }
    );
  },
  // sends a notification to its observers when its state changes
  fire: function(o, thisObj) {
    var scope = thisObj || window;
    this.handlers.forEach(function(item) {
        item.call(scope, o);
    });
  }
}
 
//as a function signature that can be invoked when Subject changes (i.e. event occurs)
var clickHandler = function(item) { 
  console.log("fired: " + item); 
};

var click = new Click();

click.subscribe(clickHandler);
click.fire('event #1');
click.unsubscribe(clickHandler);
click.fire('event #2');
click.subscribe(clickHandler);
click.fire('event #3');