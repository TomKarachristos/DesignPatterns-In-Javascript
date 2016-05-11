// The Adapter Pattern translates an interface for an object or class into an interface compatible with a specific system
// Adapters basically allow objects or classes to function together which normally couldn't due to their incompatible interface
// The adapter translates calls to its interface into calls to the original interface and the code required to achieve this is usually quite minimal.


var clientObject = {
  string1: 'foo',
  string2: 'bar',
  string3: 'baz'
};

//can't accept the clientObject, cause the function take a different structor
function interfaceMethod(str1, str2, str3) {
  console.log(str1,str2,str3);
}

// Here we make a adapter, translates an interface of three arguments, to one object.
function clientToInterfaceAdapter(clientObject) {
  interfaceMethod(clientObject.string1, clientObject.string2, clientObject.string3);
}

clientToInterfaceAdapter(clientObject);