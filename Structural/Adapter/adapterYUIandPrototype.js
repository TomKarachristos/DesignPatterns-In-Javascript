// NOT A RUNABLE EXAMPLE
/*
  Lets say you want to change from one library to another and you don't want to
  changing the code base. The solution is the adapter design pattern,

  Let’s look at an example that uses the
  Prototype library $ function and adapts it to the Yahoo! User Interface (YUI) get method

  The key difference is that get accepts a single argument, which can be an HTML element,
  a string, or an array of strings or HTML elements. In contrast, the $ function doesn’t take any
  formal parameters but rather allows the client to pass in an arbitrary number of arguments,
  accepting both strings and HTML elements. 
*/

// Prototype $ function code.
function $() {
  var elements = new Array();
  for(var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if(typeof element == 'string')
      element = document.getElementById(element);
    if(arguments.length == 1)
      return element;
    elements.push(element);
  }
  return elements;
}

// YUI get method code.
YAHOO.util.Dom.get = function(el) {
  if(YAHOO.lang.isString(el)) {
    return document.getElementById(el);
  }
  if(YAHOO.lang.isArray(el)) {
    var c = [];
    for(var i = 0, len = el.length; i < len; ++i) {
      c[c.length] = Y.Dom.get(el[i]);
    }
    return c;
  }
  if(el) {
    return el;
  }
  return null;
};

// Here is the adapters
function PrototypeToYUIAdapter() {
  return YAHOO.util.Dom.get(arguments);
}
function YUIToPrototypeAdapter(el) {
  return $.apply(window, el);
}