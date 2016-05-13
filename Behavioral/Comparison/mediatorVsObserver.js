// NOT A RUNABLE EXAMPLE
// from http://jonathancreamer.com/javascript-patterns-mediator-vs-observer/

// Observer design pattern
var user = new User();

var app = {  
    init: function() {
        user.on( "login", this.userLoggedIn );
    },
    userLoggedIn: function() {
        // user is now logged in.
    }
};
app.init();

// somewhere else in the app
user.trigger( "login" );  

// Mediator design pattern
// the user is some kind of an emitter
var user = new User();

var app = {  
    events: new SomeKindOfEmitter(),
    init: function() {
        app.events.on( "login", this.userLoggedIn );
    },
    userLoggedIn: function() {
        // user is now logged in.
    }
};
app.init();

// somewhere else in the app
app.events.trigger( "login" );  