##### Builder pattern separates the construction of a complex object from its representation so that the same construction process can create different representations.

 The intention of the builder pattern is to find a solution to the telescoping constructor anti-pattern. The telescoping constructor anti-pattern occurs when the increase of object constructor parameter combination leads to an exponential list of constructors. Instead of using numerous constructors, the builder pattern uses another object, a builder, that receives each initialization parameter step by step and then returns the resulting constructed object at once.

#### Rules Of Thumb:
+ The Builder is only needed when an object cannot be produced in one step.
+ Builder often builds a Composite.
+ Builder focuses on constructing a complex object step by step. Abstract Factory emphasizes a family of product objects (either simple or complex). Builder returns the product as a final step, but as far as the Abstract Factory is concerned, the product gets returned immediately.
+ Disadvantages: Requires creating a separate ConcreteBuilder for each different type of Product.
+ It can be used for objects that contain flat data (html code, SQL query, X.509 certificate...), that is to say, data that can't be easily edited. This type of data cannot be edited step by step and must be edited at once. The best way to construct such an object is to use a builder class

#### Nice articles:
