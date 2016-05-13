// NOT A RUNABLE
// from here http://stackoverflow.com/questions/7379732/what-is-a-javascript-proxy-pattern
// Imagine you have site with many ajax requests. There is a change in design. 
// Now before each request you want to display some custom loading gif.
// You neeed to change all the code where there is an ajax request or you can use proxy pattern.

var proxied = jQuery.ajax; // Preserving original function
jQuery.ajax = function() { 
    jQuery("#loading").dialog({modal: true});
    return proxied.apply(this, arguments);
}