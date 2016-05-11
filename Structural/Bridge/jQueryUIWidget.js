//NOT A RUNNABLE FILE
/*!
 * jQuery UI Widget factory "bridge" plugin boilerplate
 * Author: @erichynds
 * Further changes, additional comments: @addyosmani
 * Licensed under the MIT license
 */
 
 
// a "widgetName" object constructor
// required: this must accept two arguments,
// options: an object of configuration options
// element: the DOM element the instance was created on
var widgetName = function( options, element ){
  this.name = "myWidgetName";
  this.options = options;
  this.element = element;
  this._init();
}
 
// the "widgetName" prototype
widgetName.prototype = {
 
    // _create will automatically run the first time this
    // widget is called
    _create: function(){
        // creation code
    },
 
    // required: initialization logic for the plugin goes into _init
    // This fires when our instance is first created and when
    // attempting to initialize the widget again (by the bridge)
    // after it has already been initialized.
    _init: function(){
        // init code
    },
 
    // required: objects to be used with the bridge must contain an
    // "option". Post-initialization, the logic for changing options
    // goes here.
    option: function( key, value ){
 
        // optional: get/change options post initialization
        // ignore if you don't require them.
 
        // signature: $("#foo").bar({ cool:false });
        if( $.isPlainObject( key ) ){
            this.options = $.extend( true, this.options, key );
 
        // signature: $( "#foo" ).option( "cool" ); - getter
        } else if ( key && typeof value === "undefined" ){
            return this.options[ key ];
 
        // signature: $( "#foo" ).bar("option", "baz", false );
        } else {
            this.options[ key ] = value;
        }
 
        // required: option must return the current instance.
        // When re-initializing an instance on elements, option
        // is called first and is then chained to the _init method.
        return this;
    },
 
    // notice no underscore is used for public methods
    publicFunction: function(){
        console.log( "public function" );
    },
 
    // underscores are used for private methods
    _privateFunction: function(){
        console.log( "private function" );
    }
};

//Usage

// connect the widget obj to jQuery's API under the "foo" namespace
$.widget.bridge( "foo", widgetName );
 
// create an instance of the widget for use
var instance = $( "#foo" ).foo({
   baz: true
});
 
// our widget instance exists in the elem's data
// Outputs: #elem
console.log(instance.data( "foo" ).element);
 
// bridge allows us to call public methods
// Outputs: "public method"
instance.foo("publicFunction");
 
// bridge prevents calls to internal methods
instance.foo("_privateFunction");