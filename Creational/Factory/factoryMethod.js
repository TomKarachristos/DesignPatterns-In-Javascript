//The true factory pattern differs from the simple factory in that instead of using another class
//or object to create the bicycles, you will use a subclass

var BicycleShop = function() {};
BicycleShop.prototype = {
  sellBicycle: function(model) {
    var bicycle = this.createBicycle(model);
    // bicycle.assemble();
    // bicycle.wash();
    return bicycle;
  },
  createBicycle: function(model) {
    throw new Error('Unsupported operation on an abstract class.');
  }
};

var AcmeBicycleShop = function() {};
extend(AcmeBicycleShop, BicycleShop);
AcmeBicycleShop.prototype.createBicycle = function(model) {
  var bicycle;
  switch(model) {
    case 'The Speedster':
      // bicycle = new AcmeSpeedster();
      console.log("make a new AcmeSpeedster")
      break;
    case 'The Lowrider':
      // bicycle = new AcmeLowrider();
      console.log("make a new AcmeLowrider")
      break;
    case 'The Flatlander':
      // bicycle = new AcmeFlatlander();
      console.log("make a new AcmeFlatlander")
      break;
    case 'The Comfort Cruiser':
    default:
      // bicycle = new AcmeComfortCruiser();
      console.log("make a new AcmeComfortCruiser")
  }
  return bicycle;
};

var GeneralProductsBicycleShop = function() {};
extend(GeneralProductsBicycleShop, BicycleShop);
GeneralProductsBicycleShop.prototype.createBicycle = function(model) {
  var bicycle;
  switch(model) {
    case 'The Speedster':
      // bicycle = new GeneralProductsSpeedster();
      console.log("make a new GeneralProductsSpeedster")
      break;
    case 'The Lowrider':
      // bicycle = new GeneralProductsLowrider();
      console.log("make a new GeneralProductsLowrider")
      break;
    case 'The Flatlander':
      // bicycle = new GeneralProductsFlatlander();
      console.log("make a new GeneralProductsFlatlander")
      break;
    case 'The Comfort Cruiser':
    default:
      // bicycle = new GeneralProductsComfortCruiser();
      console.log("make a new GeneralProductsComfortCruiser")
  }
  return bicycle;
};

// You create a certain style of bycycle shop
var alecsCruisers = new AcmeBicycleShop();
// You use all your shops with the same interface
var yourNewBike = alecsCruisers.sellBicycle('The Lowrider');

var bobsCruisers = new GeneralProductsBicycleShop();
var yourSecondNewBike = bobsCruisers.sellBicycle('The Lowrider');


// inheritance
function extend(subClass, superClass) {
  var F = function() {};
  F.prototype = superClass.prototype;
  subClass.prototype = new F();
  subClass.prototype.constructor = subClass;
  subClass.superclass = superClass.prototype;
  if(superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}