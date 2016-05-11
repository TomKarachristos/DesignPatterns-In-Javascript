#### Basic Info
+ Structural design patterns are design patterns that ease the design by identifying a simple way to realize relationships between entities.

name | explanation | 
--- | --- |
Adapter pattern | 'adapts' one interface for a class into one that a client expects
Adapter pipeline |  Use multiple adapters for debugging purposes.
Retrofit Interface Pattern | An adapter used as a new interface for multiple classes at the same time.
Aggregate pattern | a version of the Composite pattern with methods for aggregation of children
Bridge pattern | decouple an abstraction from its implementation so that the two can vary independently
Tombstone | An intermediate "lookup" object contains the real location of an object.
Composite pattern | a tree structure of objects where every object has the same interface
Decorator pattern | add additional functionality to a class at runtime where subclassing would result in an exponential rise of new classes
Extensibility pattern | aka. Framework - hide complex code behind a simple interface
Facade pattern | create a simplified interface of an existing interface to ease usage for common tasks
Flyweight pattern | a large quantity of objects share a common properties object to save space
Marker pattern | an empty interface to associate metadata with a class.
Pipes and filters | a chain of processes where the output of each process is the input of the next
Opaque pointer | a pointer to an undeclared or private type, to hide implementation details
Proxy pattern | a class functioning as an interface to another thing


NOTE: many guys use a adapter pattern when the use a third-library and full it with unit testing, so when 
library updates if test unit fails than just change the adapter

An adapter converts one interface to another; it doesn’t remove any abilities
or otherwise simplify the interface. Adapters are required for clients that expect an API
that isn’t available