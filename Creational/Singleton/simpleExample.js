// it create it when app start
var myNamespace = { // a very is simple example
  // only public 
  variable1: "1",
  variable2: 2,
  method1: function() {
  },
  method2: function() {
  }
};

console.log(myNamespace.variable1);

// if you want private you can just use
// the module pattern
var myInstance = (function() {
  var privateVar = '';

  function privateMethod () {
    // ...
  }

  return { // public interface
    publicMethod1: function () {
      // all private members are accesible here
    },
    publicMethod2: function () {
    }
  };
})();
