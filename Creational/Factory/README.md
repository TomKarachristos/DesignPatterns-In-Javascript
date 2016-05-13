##### A "simple factory" is an object which encapsulates the creation of another object, shielding that code from the rest of your application(not a real pattern but worth mentioning).
##### Factory method pattern which allows a class to defer instantiation to subclasses.
##### Abstract factory pattern which provides an interface for creating related or dependent objects without specifying the objects' concrete classes.

Creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.

The intent of Abstract factory is to insulate the creation of objects from their usage and to create families of related objects without having to depend on their concrete classes. This allows for new derived types to be introduced with no change to the code that uses the base class.

#### Rules Of Thumb:
+ The true factory pattern differs from the "simple factory" in that instead of using another class or object to create the bicycles, you will use a subclass.
+ With the Factory pattern, you produce implementations (Apple, Banana, Cherry, etc.) of a particular interface -- say, IFruit. With the Abstract Factory pattern, you produce implementations of a particular Factory interface -- e.g., IFruitFactory. Each of those knows how to create different kinds of fruit.([source](http://stackoverflow.com/questions/1001767/what-is-the-basic-difference-between-the-factory-and-abstract-factory-patterns))
+ Abstract Factory can be used as an alternative to Facade to hide platform-specific classes.
+ AbstractFactory only declares an interface for creating products. It's up to ConcreteProduct subclasses to actually create them. 
+ Builder focuses on constructing a complex object step by step. Abstract Factory emphasizes a family of product objects (either simple or complex). Builder returns the product as a final step, but as far as the Abstract Factory is concerned, the product gets returned immediately.

#### Nice articles: