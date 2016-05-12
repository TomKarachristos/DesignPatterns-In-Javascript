#### Definition:
+ Structural design patterns are design patterns that ease the design by identifying a simple way to realize relationships between entities.

#### Rules Of Thumb:
+ Adapter makes things work after they're designed; Bridge makes them work before they are.
+ Adapter provides a different interface to its subject. Proxy provides the same interface. Decorator provides an enhanced interface.
+ Composite and Decorator have similar structure diagrams, reflecting the fact that both rely on recursive composition to organize an open-ended number of objects.
+ Composite can be traversed with Iterator. Visitor can apply an operation over a Composite. Composite could use Chain of responsibility to let components access global properties through their parent. It could also use Decorator to override these properties on parts of the composition. It could use Observer to tie one object structure to another and State to let a component change its behavior as its state changes.
+ Abstract Factory can be used as an alternative to Facade to hide platform-specific classes.
+ Flyweight explains when and how State objects can be shared.


#### Design Patterns:
name | explanation | 
--- | --- |
Adapter pattern | 'adapts' one interface for a class into one that a client expects
Bridge pattern | decouple an abstraction from its implementation so that the two can vary independently
Composite pattern | a tree structure of objects where every object has the same interface
Decorator pattern | add additional functionality to a class at runtime where subclassing would result in an exponential rise of new classes
Facade pattern | create a simplified interface of an existing interface to ease usage for common tasks
Flyweight pattern | a large quantity of objects share a common properties object to save space
Proxy pattern | a class functioning as an interface to another thing
