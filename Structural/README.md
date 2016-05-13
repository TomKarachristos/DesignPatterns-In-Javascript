#### Definition:
+ Structural design patterns are design patterns that ease the design by identifying a simple way to realize relationships between entities.

#### Rules Of Thumb:
+ Proxy, Decorator, Adapter, and Bridge are all variations on "wrapping" a class. But their uses are different.
+ Proxy could be used when you want to lazy-instantiate an object, or hide the fact that you're calling a remote service, or control access to the object.
+ Decorator is also called "Smart Proxy." This is used when you want to add functionality to an object, but not by extending that object's type. This allows you to do so at runtime.
+ Adapter is used when you have an abstract interface, and you want to map that interface to another object which has similar functional role, but a different interface.
+ Bridge is very similar to Adapter, but we call it Bridge when you define both the abstract interface and the underlying implementation. I.e. you're not adapting to some legacy or third-party code, you're the designer of all the code but you need to be able to swap out different implementations.
+ The Adapter pattern is geared toward making unrelated classes work together. 
It is usually applied to systems after they're designed. Bridge, on the other 
hand, is used up-front in a design to let abstractions and implementations vary 
independently.(GOF)
+ Facade is a higher-level (read: simpler) interface to a subsystem of one or more classes. Suppose you have a complex concept that requires multiple objects to represent. Making changes to that set of objects is confusing, because you don't always know which object has the method you need to call. That's the time to write a Facade that provides high-level methods for all the complex operations you can do to the collection of objects. Example: a Domain Model for a school section, with methods like countStudents(), reportAttendance(), assignSubstituteTeacher(), and so on.
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
