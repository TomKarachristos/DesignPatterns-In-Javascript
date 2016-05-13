// from http://www.dofactory.com/javascript/mediator-design-pattern

// A nice chat design pattern
// objects that are being mediated by the Mediator
var Participant = function(name) {
    this.name = name;
    this.chatroom = null; // each instance maintains a reference to the Mediator
};
 
Participant.prototype = {
    send: function(message, to) {
      this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
      console.log(from.name + " to " + this.name + ": " + message);
    }
};
 
var Chatroom = function() {
  // maintains references to participants objects
  var participants = {};
  // defines an interface for communicating with participants objects
  return {
    register: function(participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
    },
    // manages central control over operations
    send: function(message, from, to) {
      if (to) {                      // single message
        to.receive(message, from);    
      } else {                       // broadcast message
        for (key in participants) {   
          if (participants[key] !== from) {
              participants[key].receive(message, from);
          }
        }
      }
    }
  };
};
 
var yoko = new Participant("Yoko");
var john = new Participant("John");
var paul = new Participant("Paul");
var ringo = new Participant("Ringo");

var chatroom = new Chatroom();
chatroom.register(yoko);
chatroom.register(john);
chatroom.register(paul);
chatroom.register(ringo);

yoko.send("All you need is love.");
yoko.send("I love you John.");
john.send("Hey, no need to broadcast", yoko);
paul.send("Ha, I heard that!");
ringo.send("Paul, what do you think?", paul);
