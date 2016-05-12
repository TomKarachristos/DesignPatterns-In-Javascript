// These are very typical command classes. They take another object as an argument to the
// constructor and implement an execute method that calls one particular method of that object

// Our object
var adObject = function(id){
  this.start = function(){
    console.log("start: ",id);
  };
  this.stop =  function(){
    console.log("stop: ", id);
  };
};

/* StopAd command class. */
var StopAd = function(adObject) {
  this.ad = adObject;
};
StopAd.prototype.execute = function() {
  this.ad.stop();
};

/* StartAd command class. */
var StartAd = function(adObject) { 
  this.ad = adObject;
};
StartAd.prototype.execute = function() {
  this.ad.start();
};

var getAds  = function(){
  var adArray = [new adObject("1"), new adObject("2"), new adObject("3")];
  return adArray
};

var ads = getAds();
for(var i = 0, len = ads.length; i < len; i++) {
  // Create command objects for starting and stopping the ad.
  var startCommand = new StartAd(ads[i]);
  var stopCommand = new StopAd(ads[i]);
  // console.log can be a event in a button
  console.log('for:Start ');startCommand.execute();
  console.log('for:Stop ');stopCommand.execute()
}

/* Commands using closures. */
function makeStart(adObject) {
  return function() {
    adObject.start();
  };
}
function makeStop(adObject) {
  return function() {
    adObject.stop();
  };
}
/* Implementation code. */
var startCommand = makeStart(ads[0]);
var stopCommand = makeStop(ads[0]);
startCommand(); // Execute the functions directly instead of calling a method.
stopCommand();

console.log("---------")

// from essentialjsdesignpatterns
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