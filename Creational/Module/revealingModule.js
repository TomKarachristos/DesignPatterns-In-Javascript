// The Revealing Module pattern came about as Christian Heilmann’s was frustrated with the fact that 
// he had to repeat the name of the main object when we wanted to call one public method
// from another or access public variables.

// module export
var myModule = (function ( jQ, _ ) {
  
  var privateCounter = 1;
    
  function privateMethod1(){
    console.log("privateMethod1");
    ++privateCounter;
  }

  function publicMethod(){
    privateMethod1();
    console.log(privateCounter);
  }

  return{// the structure is more clear
    myPublicVar: privateCounter,
    increaseAndShowCounter: publicMethod
  };
 
// clear way to access global objects, and gives alias
})( "jQuery", "_" );
 
 myModule.increaseAndShowCounter();