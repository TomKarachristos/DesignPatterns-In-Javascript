// NOT A RUNABLE

// Publish!!!
 
// jQuery: $(obj).trigger("channel", [arg1, arg2, arg3]);
$( el ).trigger( "/login", [{username:"test", userData:"test"}] );
 
// Dojo: dojo.publish("channel", [arg1, arg2, arg3] );
dojo.publish( "/login", [{username:"test", userData:"test"}] );
 
// YUI: el.publish("channel", [arg1, arg2, arg3]);
el.publish( "/login", {username:"test", userData:"test"} );
 
 
// Subscribe!!!
 
// jQuery: $(obj).on( "channel", [data], fn );
$( el ).on( "/login", function( event ){...} );
 
// Dojo: dojo.subscribe( "channel", fn);
var handle = dojo.subscribe( "/login", function(data){..} );
 
// YUI: el.on("channel", handler);
el.on( "/login", function( data ){...} );
 
 
// Unsubscribe!!!
 
// jQuery: $(obj).off( "channel" );
$( el ).off( "/login" );
// Dojo: dojo.unsubscribe( handle );
dojo.unsubscribe( handle );
// YUI: el.detach("channel");
el.detach( "/login" );