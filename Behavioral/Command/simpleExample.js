// from essentialjsdesignpatterns book
var carManager = {
  // request information
  requestInfo: function( model, id ){
    return "The information for " + model + " with ID " + id + " is foobar";
  },
  // purchase the car
  buyVehicle: function( model, id ){
    return "You have successfully purchased Item " + id + ", a " + model;
  },
  // arrange a viewing
  arrangeViewing: function( model, id ){
    return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
  }
};

/*
  imagine if the core API behind the carManager changed. This would require all objects directly
  accessing these methods within our application to also be modified. This could be viewed as a 
  layer of coupling which effectively goes against the OOP methodology of loosely coupling objects as much as possible.
  Instead, we could solve this problem by abstracting the API away further.
*/

// Here is the command pattern, it's like you run a function from a proxy
carManager.execute = function ( name ) {
    return carManager[name] && carManager[name].apply( carManager, [].slice.call(arguments, 1) );
};

console.log(carManager.execute( "arrangeViewing", "Ferrari", "14523" ));
console.log(carManager.execute( "requestInfo", "Ford Mondeo", "54323" ));
console.log(carManager.execute( "requestInfo", "Ford Escort", "34232" ));
console.log(carManager.execute( "buyVehicle", "Ford Escort", "34232" ));