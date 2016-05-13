var TrafficLight = function () {
  var count = 0;
  // maintains a reference to a state object that defines the current state
  var currentState = new Red(this);
  // allows State objects to change its current state to a different state
  this.change = function (state) {
    // limits number of changes
    if (count++ >= 10) return;
    currentState = state;
    currentState.go();
  };
  // Exposes an interface that supports clients of the service
  this.start = function () {
      currentState.go();
  };
}
 
// the three next encapsulates the state values and associated behavior of the state
var Red = function (light) {
  this.light = light;
  this.go = function () {
    console.log("Red --> for 1 minute");
    light.change(new Green(light)); // change the state
  }
};
 
var Yellow = function (light) {
  this.light = light;
  this.go = function () {
    console.log("Yellow --> for 10 seconds");
    light.change(new Red(light)); // change the state
  }
};
 
var Green = function (light) {
  this.light = light;
  this.go = function () {
    console.log("Green --> for 1 minute");
    light.change(new Yellow(light)); // change the state
  }
};
 
var light = new TrafficLight();
light.start();
