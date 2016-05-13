// Our object
var adObject = function(id){
  this.start = function(){
    console.log("start: ",id);
  };
  this.stop =  function(){
    console.log("stop: ", id);
  };
};

// These are very typical command classes. They take another object as an argument to the
// constructor and implement an execute method that calls one particular method of that object
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
