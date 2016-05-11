// Branching is a technique that allows you to encapsulate browser differences into dynamic
// methods that get set at run-time

// Branching Singleton template
MyNamespace.Singleton = (function() {
  var objectA = {
    method1: function() {

    },
    method2: function() {

    }
  };
  var objectB = {
    method1: function() {

    },
    method2: function() {

    }
  };
  return (someCondition) ? objectA : objectB;
})();


// a real example
// every browser have a different XMLHttpRequest.
var SimpleXhrFactory = (function() {
// The three branches.
  var standard = {
    createXhrObject: function() {
      return new XMLHttpRequest();
    }
  };
  var activeXNew = {
    createXhrObject: function() {
      return new ActiveXObject('Msxml2.XMLHTTP');
    }
  };
  var activeXOld = {
    createXhrObject: function() {
      return new ActiveXObject('Microsoft.XMLHTTP');
    }
  };

  // To assign the branch, try each method; return whatever doesn't fail.
  var testObject;
    try {
      testObject = standard.createXhrObject();
      return standard; // Return this if no error was thrown.
    }catch(e) {
      try{
        testObject = activeXNew.createXhrObject();
        return activeXNew; // Return this if no error was thrown.
      }catch(e){
        try {
          testObject = activeXOld.createXhrObject();
          return activeXOld; // Return this if no error was thrown.
        }catch(e){
          throw new Error('No XHR object found in this environment.');
        }
      }
    }

})();
