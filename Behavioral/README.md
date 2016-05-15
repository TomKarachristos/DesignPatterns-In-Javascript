##### Behavioral design patterns are design patterns that identify common communication patterns between objects and realize these patterns. By doing so, these patterns increase flexibility in carrying out this communication.

#### Rules Of Thumb:
+ Chain of responsibility, Command, Mediator, and Observer, address how you can decouple senders and receivers, but with different trade-offs. Chain of responsibility passes a sender request along a chain of potential receivers. Command normally specifies a sender-receiver connection with a subclass. Mediator has senders and receivers reference each other indirectly. Observer defines a very decoupled interface that allows for multiple receivers to be configured at run-time.
+ Chain of responsibility is often applied in conjunction with Composite. There, a component's parent can act as its successor.
+ Command and Memento act as magic tokens to be passed around and invoked at a later time. In Command, the token represents a request; in Memento, it represents the internal state of an object at a particular time. Polymorphism is important to Command, but not to Memento because its interface is so narrow that a memento can only be passed as a value.
+ Terminal symbols within Interpreter's abstract syntax tree can be shared with Flyweight.
+ Iterator can traverse a Composite. Visitor can apply an operation over a Composite.
+ Polymorphic Iterators rely on Factory Methods to instantiate the appropriate Iterator subclass.
+ Mediator and Observer are competing patterns. The difference between them is that Observer distributes communication by introducing "observer" and "subject" objects, whereas a Mediator object encapsulates the communication between other objects. We've found it easier to make reusable Observers and Subjects than to make reusable Mediators.
+ On the other hand, Mediator can leverage Observer for dynamically registering colleagues and communicating with them.
+ Mediator is similar to Facade in that it abstracts functionality of existing classes. Mediator abstracts/centralizes arbitrary communication between colleague objects, it routinely "adds value", and it is known/referenced by the colleague objects (i.e. it defines a multidirectional protocol). In contrast, Facade defines a simpler interface to a subsystem, it doesn't add new functionality, and it is not known by the subsystem classes (i.e. it defines a unidirectional protocol where it makes requests of the subsystem classes but not vice versa).
+ Memento is often used in conjunction with Iterator. An Iterator can use a Memento to capture the state of an iteration. The Iterator stores the Memento internally.
+ Flyweight explains when and how State objects can be shared.
+ Strategy lets you change the guts of an object. Decorator lets you change the skin.
+ Strategy is to algorithm. as Builder is to creation.
+ Strategy has 2 different implementations, the first is similar to State. The difference is in binding times (Strategy is a bind-once pattern, whereas State is more dynamic).
+ Strategy objects often make good Flyweights.
+ Strategy is like Template method except in its granularity.
+ Template method uses inheritance to vary part of an algorithm. Strategy uses delegation to vary the entire algorithm.
+ The Visitor pattern is like a more powerful Command pattern because the visitor may initiate whatever is appropriate for the kind of object it encounters.
+ Flyweight explains when and how State objects can be shared.
+ Strategy lets you change the guts of an object. Decorator lets you change the skin.
+ Strategy is to algorithm. as Builder is to creation.
+ Strategy objects often make good Flyweights.
+ Template method uses inheritance to vary part of an algorithm. Strategy uses delegation to vary the entire algorithm.


#### Design Patterns:
name | explanation | 
--- | --- |
Chain of responsibility pattern| Command objects are handled or passed on to other objects by logic-containing processing objects
Command pattern| Command objects encapsulate an action and its parameters
Interpreter pattern| Implement a specialized computer language to rapidly solve a specific set of problems
Iterator pattern| Iterators are used to access the elements of an aggregate object sequentially without exposing its underlying representation
Mediator pattern| Provides a unified interface to a set of interfaces in a subsystem
Memento pattern| Provides the ability to restore an object to its previous state (rollback)
Observer pattern| aka Publish/Subscribe or Event Listener. Objects register to observe an event that may be raised by another object
State pattern| A clean way for an object to partially change its type at runtime
Strategy pattern| Algorithms can be selected on the fly
Template method pattern| Describes the program skeleton of a program
Visitor pattern| A way to separate an algorithm from an object
