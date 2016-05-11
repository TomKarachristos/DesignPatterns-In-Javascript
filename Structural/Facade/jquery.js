// NOT A RUNNABLE

// The addEvent function is a basic facade that allows you to use a simplified method of adding
// event listeners to DOM nodes. It avoids the hassle of having to check against browser differences
// every time you want to add a new event listener to an element.
function addEvent(el, type, fn) {
  if (window.addEventListener) {
    el.addEventListener(type, fn, false);
  }
  else if (window.attachEvent) {
    el.attachEvent('on' + type, fn);
  }
  else {
    el['on' + type] = fn;
  }
}

bindReady: function() {
  [..]
  if ( document.addEventListener ) {
    // Use the handy event callback
    document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

    // A fallback to window.onload, that will always work
    window.addEventListener( "load", jQuery.ready, false );

  // If IE event model is used
  } else if ( document.attachEvent ) {

    document.attachEvent( "onreadystatechange", DOMContentLoaded );

    // A fallback to window.onload, that will always work
    window.attachEvent( "onload", jQuery.ready );
  [..]
}