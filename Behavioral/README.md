#### Definition:
+ Behavioral design patterns are design patterns that identify common communication patterns between objects and realize these patterns. By doing so, these patterns increase flexibility in carrying out this communication.

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
Chain of responsibility pattern| Command objects are handled or passed on to other objects by logic-containing processing objects
Command pattern| Command objects encapsulate an action and its parameters
"Externalize the Stack": Turn a recursive function into an iterative one that uses a stack[1]
Interpreter pattern| Implement a specialized computer language to rapidly solve a specific set of problems
Iterator pattern| Iterators are used to access the elements of an aggregate object sequentially without exposing its underlying representation
Mediator pattern| Provides a unified interface to a set of interfaces in a subsystem
Memento pattern| Provides the ability to restore an object to its previous state (rollback)
Null Object pattern| Designed to act as a default value of an object
Observer pattern| aka Publish/Subscribe or Event Listener. Objects register to observe an event that may be raised by another object
Weak reference pattern| De-couple an observer from an observable[2]
Protocol stack| Communications are handled by multiple layers, which form an encapsulation hierarchy
Single-serving visitor pattern| Optimise the implementation of a visitor that is allocated, used only once, and then deleted
State pattern| A clean way for an object to partially change its type at runtime
Strategy pattern| Algorithms can be selected on the fly
Template method pattern| Describes the program skeleton of a program
Visitor pattern| A way to separate an algorithm from an object