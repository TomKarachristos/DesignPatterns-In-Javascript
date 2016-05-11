##### Bridge pattern decouple an abstraction from its implementation so that the two can vary independently

#### Files:
+ bridge.js: Two exampples, one very simple and one a little more complex.
+ JQueryDOM-To-ObjectBridge.js: A real example using the jquery library
+ jQueryUIWidget.js: A real example inside the jquery UI code.

#### Some notes:
+ Many guys use a adapter pattern when they use a third-library and full it with unit testing, so when library updates if test unit fails than just change the adapter.
+ The adapter translates calls to its interface into calls to the original interface and the code required to achieve this is usually quite minimal.
+ An adapter converts one interface to another; it doesn’t remove any abilities or otherwise simplify the interface. 
+ Adapters are be used for clients that expect an API that isn’t available.

#### Nice articles:
+ https://alexsexton.com/blog/2010/02/using-inheritance-patterns-to-organize-large-jquery-applications/