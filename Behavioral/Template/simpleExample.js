// A very close to a real example
var datastore = {
  // offers an interface for clients to invoke the templateMethod
  process: function() {
    // implements template method which defines the primitive Steps for an algorithm
    // provides the hooks (through method overriding) for a client developer to implement the Steps
    this.connect();
    this.select();
    this.disconnect();
    return true;
  }
};
 
function inherit(proto) {
  var F = function() { };
  F.prototype = proto;
  return new F();
}
 
// implements the primitive Steps as defined in AbstractClass
var mySql = inherit(datastore);

// implement template steps
// overriding the functions 
mySql.connect = function() {
    console.log("MySQL: connect step");
};

mySql.select = function() {
    console.log("MySQL: select step");
};

mySql.disconnect = function() {
    console.log("MySQL: disconnect step");
};

// call the template
mySql.process();