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