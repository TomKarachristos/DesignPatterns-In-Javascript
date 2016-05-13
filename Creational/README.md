#### Definition:
+ Creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or in added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.

#### Rules Of Thumb:
+ With the Factory pattern, you produce implementations (Apple, Banana, Cherry, etc.) of a particular interface -- say, IFruit. With the Abstract Factory pattern, you produce implementations of a particular Factory interface -- e.g., IFruitFactory. Each of those knows how to create different kinds of fruit.([source](http://stackoverflow.com/questions/1001767/what-is-the-basic-difference-between-the-factory-and-abstract-factory-patterns))
+ Sometimes creational patterns are competitors: there are cases when either Prototype or Abstract Factory could be used profitably.
+ Abstract Factory can be used as an alternative to Facade to hide platform-specific classes.
+ Abstract Factory classes are often implemented with Factory Methods, but they can also be implemented using Prototype.
+ The Builder is only needed when an object cannot be produced in one step.
+ Builder often builds a Composite.
+ Factory Methods are usually called within Template methods.
+ Builder focuses on constructing a complex object step by step. Abstract Factory emphasizes a family of product objects (either simple or complex). Builder returns the product as a final step, but as far as the Abstract Factory is concerned, the product gets returned immediately.
+ Prototype doesn't require subclassing, but it does require an Initialize operation. Factory Method requires subclassing, but doesn't require Initialize.
+ Designs that make heavy use of the Composite and Decorator patterns often can benefit from Prototype as well.
+ The big difference is that in the builder pattern, the "director" gets to be unaware of the details of the builders. So instead of having a class called NyPizzaStore with a method called createPizza() that (obviously) is highly tuned to creating a NY style pizza, you might instead have a class call PizzaChef that takes in an instance of a class that customizes how the details of how the pizza is made. (For this example/analogy, let's rename renamePizzaIngerdientFactory to Recipe so we can treat it just a bit differently). So that gives you PizzaChef.createPizza(Recipe r). The PizzaChef class does not need to worry if the clams are fresh or frozen, he simply calls each of the builders in turn and creates the desired pizza. This is pivotal to the difference...there is only one PizzaChef and he is unaware of the details (subclasses) of the Recipe.([source](http://stackoverflow.com/questions/24696828/difference-between-abstract-factory-and-builder))

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
