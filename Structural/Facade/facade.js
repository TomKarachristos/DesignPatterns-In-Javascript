// A simple example
function a(x) {
  // do stuff here...
}

function b(y) {
  // do stuff here...
}

function ab(x, y) {
  // in bridge pattern we create here two class(a,b)
  // in facade we simplify the use by call the two
  // by just calling the ab
  a(x);
  b(y);
}


// here we use facade pattern with module pattern
var module = (function() {
 
  var _private = {
      i: 5,
      get: function() {
          console.log( "current value:" + this.i);
      },
      set: function( val ) {
          this.i = val;
      },
      run: function() {
          console.log( "running" );
      },
      jump: function(){
          console.log( "jumping" );
      }
  };

  return {

    facade: function( args ) {
        _private.set(args.val);
        _private.get();
        if ( args.run ) {
            _private.run();
        }
    }
  };
}());
 
// Outputs: "current value: 10" and "running"
module.facade( {run: true, val: 10} );