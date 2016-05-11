// A simple solution
// Car class, un-optimized. Without the flyweight.
// if you need many car the application will start to be heavy
var Car = function(make, model, year, owner, tag, renewDate) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.tag = tag;
  this.renewDate = renewDate;
};
Car.prototype = {
  getMake: function() {
    return this.make;
  },
  getModel: function() {
    return this.model;
  },
  getYear: function() {
    return this.year;
  },
  transferOwnership: function(newOwner, newTag, newRenewDate) {
    this.owner = newOwner;
    this.tag = newTag;
    this.renewDate = newRenewDate;
  },
  renewRegistration: function(newRenewDate) {
    this.renewDate = newRenewDate;
  },
  isRegistrationCurrent: function() {
    var today = new Date();
    return today.getTime() < Date.parse(this.renewDate);
  }
};

/*
  the physical car data (make, model,year) is intrinsic, and the owner data (owner name, tag number, last registration date) is extrinsic.
  This means that only one car object is needed for each combination of make, model, and year
*/
// solution
// Car class, optimized as a flyweight.
var Car = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
};

Car.prototype = {
  getMake: function() {
    return this.make;
  },
  getModel: function() {
    return this.model;
  },
  getYear: function() {
    return this.year;
  }
};
// Because the object’s data is split up, you
// must now use a factory to instantiate it.
/* CarFactory singleton. */
var CarFactory = (function() {
  var createdCars = {};
  return {
    createCar: function(make, model, year) {
      // Check to see if this particular combination has been created before.
      // If so, it returns it. If not, it creates a new car
      if(createdCars[make + '-' + model + '-' + year]) {
        return createdCars[make + '-' + model + '-' + year];
      }
      else {
        var car = new Car(make, model, year);
        createdCars[make + '-' + model + '-' + year] = car;
        return car;
      }
    }
  };
})();

// All of the data that was removed from the Car objects has to be stored somewhere;
// you use a singleton as a manager to encapsulate that data
// CarRecordManager singleton. 
var CarRecordManager = (function() {
  var carRecordDatabase = {};
  return {
    // Add a new car record into the city's system.
    addCarRecord: function(make, model, year, owner, tag, renewDate) {
      var car = CarFactory.createCar(make, model, year);
      carRecordDatabase[tag] = {
        owner: owner,
        renewDate: renewDate,
        car: car
      };
    },
    // Methods previously contained in the Car class.
    transferOwnership: function(tag, newOwner, newTag, newRenewDate) {
      var record = carRecordDatabase[tag];
      record.owner = newOwner;
      record.tag = newTag;
      record.renewDate = newRenewDate;
    },
    renewRegistration: function(tag, newRenewDate) {
      carRecordDatabase[tag].renewDate = newRenewDate;
    },
    isRegistrationCurrent: function(tag) {
      var today = new Date();
      return today.getTime() < Date.parse(carRecordDatabase[tag].renewDate);
    }
  };
})();;
