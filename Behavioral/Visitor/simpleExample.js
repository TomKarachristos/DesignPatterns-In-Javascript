// NOT A RUNNABLE
// RUNNABLE HERE: http://jsfiddle.net/codingepiphany/vnF7E/
// from http://www.codingepiphany.com/2013/04/13/back-to-basics-visitor-pattern-explanation-with-js-example/
var houseWithProblems = {
    plumbing: "leaky faucet",
    garageDoor: "broken motor",
    backyard: "weed infestation",
    //accept function which will receive the visitor
    accept: function(visitor) {
    	// in the accept method the visitor's visit method is invoked with 'this'
      visitor.visit(this);
    }
}

var visitorHomeInspector = {
  visit: function(home) {
    $('#specs').append("<li class='header'>Current house status:</li>");
    //let's display this on our list
    $('#specs').append("<li> Plumbing: " + home.plumbing + "</li>");
    $('#specs').append("<li> Garage Door: " + home.garageDoor + "</li>");
    $('#specs').append("<li> Backyard: " + home.backyard + "</li>");
  }
}

var visitorPlumber = {
	// implements a visit method. The argument is the Element being visited. 
  // This is where the Element's changes are made
  visit: function(home) {
    //let's fix the plumbing
    home.plumbing = "All good!"
  }
}

var visitorElectrician = {
	// implements a visit method. The argument is the Element being visited. 
  // This is where the Element's changes are made
  visit: function(home) {
    //let's fix the garage door
    home.garageDoor = "All good!"
  }
}

var visitorGardener = {
	// implements a visit method. The argument is the Element being visited. 
  // This is where the Element's changes are made
  visit: function(home) {
      //let's fix the garage door
      home.backyard = "All good! No more weeds"
  }
}

findAndSolve
    houseWithProblems.accept(visitorHomeInspector);
    houseWithProblems.accept(visitorGardener);
    houseWithProblems.accept(visitorElectrician);
    houseWithProblems.accept(visitorPlumber);
    $('.step1').fadeOut('slow', function() {
});

