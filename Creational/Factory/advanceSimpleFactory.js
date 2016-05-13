var Speedster = function() { 
};

Speedster.prototype = {
  assemble: function() {
    console.log("speedSter assemble")
  },
  wash: function() {
    console.log("speedSter wash")
  },
  ride: function() {
    console.log("speedSter ride")
  },
  repair: function() {
    console.log("speedSter repair")
  }
};

var Lowrider = function() { 
};

Lowrider.prototype = {
  assemble: function() {
    console.log("Lowrider assemble")
  },
  wash: function() {
    console.log("Lowrider wash")
  },
  ride: function() {
    console.log("Lowrider ride")
  },
  repair: function() {
    console.log("Lowrider repair")
  }
};

var ComfortCruiser = function() { 
};

ComfortCruiser.prototype = {
  assemble: function() {
    console.log("ComfortCruiser assemble")
  },
  wash: function() {
    console.log("ComfortCruiser wash")
  },
  ride: function() {
    console.log("ComfortCruiser ride")
  },
  repair: function() {
    console.log("ComfortCruiser repair")
  }
};

// You can just use the prototype
var BicycleShop = function() {};

BicycleShop.prototype = {
  sellBicycle: function(model) {
    var bicycle;
    switch(model) {
      case 'The Speedster':
        bicycle = new Speedster();
        break;
      case 'The Lowrider':
        bicycle = new Lowrider();
        break;
      case 'The Comfort Cruiser':
      default:
        bicycle = new ComfortCruiser();
    }
    // do some more things
    bicycle.assemble();
    bicycle.wash();
    return bicycle;
  }
};

var californiaCruisers = new BicycleShop();
var yourNewBike = californiaCruisers.sellBicycle('The Speedster');
yourNewBike.ride()
var yourNewBike = californiaCruisers.sellBicycle('ComfortCruiser');
yourNewBike.ride()
