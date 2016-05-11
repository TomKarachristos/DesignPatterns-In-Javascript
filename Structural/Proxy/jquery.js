// There are times when it is necessary for us to control the access and context behind an object and this is where the Proxy pattern can be useful.

// In jQuery core, a jQuery.proxy() method exists which accepts as input a function and returns a new one which will always have a specific context.
// This ensures that the value of this within a function is the value we expect.

$( "button" ).on( "click", function () {
  // Within this function, "this" refers to the element that was clicked
  $( this ).addClass( "active" );
});

// problem!
$( "button" ).on( "click", function () {
  setTimeout(function () {
    // "this" doesn't refer to our element!
    // It refers to window
    $( this ).addClass( "active" );
  });
});

// solution
$( "button" ).on( "click", function () {
   setTimeout( $.proxy( function () {
      // "this" now refers to our element as we wanted
      $( this ).addClass( "active" );
  }, this), 500);

  // the last "this" we're passing tells $.proxy() that our DOM element
  // is the value we want "this" to refer to.
});


// here is the code
// Bind a function to a context, optionally partially applying any
// arguments.
proxy: function( fn, context ) {
  if ( typeof context === "string" ) {
    var tmp = fn[ context ];
    context = fn;
    fn = tmp;
  }
 
  // Quick check to determine if target is callable, in the spec
  // this throws a TypeError, but we will just return undefined.
  if ( !jQuery.isFunction( fn ) ) {
    return undefined;
  }
 
  // Simulated bind
  var args = slice.call( arguments, 2 ),
    proxy = function() {
      return fn.apply( context, args.concat( slice.call( arguments ) ) );
    };
 
  // Set the guid of unique handler to the same of original handler, so it can be removed
  proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;
 
  return proxy;
}