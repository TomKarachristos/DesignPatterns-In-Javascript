// module export, notice that module is singleton too!
var myModule = (function ( jQ, _ ) {
  
  var privateCounter = 1;
    
  function privateMethod1(){
    console.log("privateMethod1");
    ++privateCounter;
  }

  return{
    myPublicVar: "public",
      publicMethod: function(){
          privateMethod1();
          console.log(privateCounter);
      }
  };
// clear way to access global objects, and gives alias
})( "jQuery", "_" );
 
myModule.publicMethod();

// if you want to seperate a module in many files
var myModule = (function (my) {
  my.anotherMethod = function () {
    console.log("anotherMethod");
  };

  return my;
}(myModule || {}));// {} if the files load asynchronously

myModule.publicMethod();
myModule.anotherMethod();

//Sub-modules
myModule.sub = (function () {
  var my = {};
  
  my.publicVariable = "i am here";

  return my;
}());

console.log(myModule.sub.publicVariable);
