#### Definition:
+ Creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or in added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.

#### Rules Of Thumb:
+ Sometimes creational patterns are competitors: there are cases when either Prototype or Abstract Factory could be used profitably.
+ Abstract Factory can be used as an alternative to Facade to hide platform-specific classes.
+ Builder often builds a Composite.
+ Factory Methods are usually called within Template methods.
+ Builder focuses on constructing a complex object step by step. Abstract Factory emphasizes a family of product objects (either simple or complex). Builder returns the product as a final step, but as far as the Abstract Factory is concerned, the product gets returned immediately.

#### Design Patterns:
name | explanation | 
--- | --- |
Abstract factory pattern | which provides an interface for creating related or dependent objects without specifying the objects' concrete classes. |
Builder pattern | which separates the construction of a complex object from its representation so that the same construction process can create different representations. |
Factory method pattern | which allows a class to defer instantiation to subclasses. |
Prototype pattern | which specifies the kind of object to create using a prototypical instance, and creates new objects by cloning this prototype. |
Singleton pattern | which ensures that a class only has one instance, and provides a global point of access to it. |
Object pool pattern | avoid expensive acquisition and release of resources by recycling objects that are no longer in use |
Module pattern | is a design pattern used to implement the concept of software modules, defined by modular programming, in a programming language with incomplete direct support for the concept.
