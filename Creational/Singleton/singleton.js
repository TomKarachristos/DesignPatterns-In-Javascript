// alternative to singleton:
// https://programmers.stackexchange.com/questions/40373/so-singletons-are-bad-then-what/40610#40610
// http://www.ibm.com/developerworks/webservices/library/co-single/index.html

//Singletons can increase tight coupling!
// module pattern is singleton too!

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

//  lazy loading
var Singleton = (function() {
  var uniqueInstance; // Private attribute that holds the single instance.

  function constructor() { // revealing module pattern

    privateMethod = function(){

    }

    publicMethod = function(){
      console.log("public method");
    }

    return{
      publicMethod: publicMethod,
    }
  }

  return {
    getInstance: function() {
        if(!uniqueInstance) { // Instantiate only if the instance doesn't exist.
          uniqueInstance = constructor();
        }
        return uniqueInstance;
      }
  }
})();


singletonInstance = Singleton.getInstance();
singletonInstance.publicMethod()

// A virtual proxy
// can be used instead of a lazy loading singleton when you want a little more control over how
// the class gets instantiated. A true object factory can be used instead of a branching singleton
// (although that factory may also be a singleton).