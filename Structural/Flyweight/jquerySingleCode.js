// NOT A RUNABLE EXAMPLE

// problem
$( "a" ).map( function () {
  // $(this) is create a new instance every time is call
  return $( this ).text(); 
});

// solution
jQuery.single = (function( o ){
 
   var collection = jQuery([1]);
   return function( element ) {
 
       // Give collection the element:
       collection[0] = element;
 
        // Return the collection:
       return collection;
 
   };
})();

$( "div" ).on( "click", function () {
 
   // When you use the jQuery single only one instance
   // of jQuery is created
   var html = jQuery.single( this ).next().html();
});