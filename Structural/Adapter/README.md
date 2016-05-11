##### Adapter pattern: 'adapts' one interface for a class into one that a client expects

#### Files:
+ adapter.js: A vary simple example.
+ adapterYUIandPrototype.js: Adapter in real action, we adapter some libraries.
+ jqueryAdapterCode.js: A code inside jquery that use adapter pattern.

#### Some notes:
+ Many guys use a adapter pattern when they use a third-library and full it with unit testing, so when library updates if test unit fails than just change the adapter.
+ The adapter translates calls to its interface into calls to the original interface and the code required to achieve this is usually quite minimal.
+ An adapter converts one interface to another; it doesn’t remove any abilities or otherwise simplify the interface. 
+ Adapters can be used for clients that expect an API that isn’t available.

#### Nice articles:
