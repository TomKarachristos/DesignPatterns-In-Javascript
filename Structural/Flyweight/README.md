##### Flyweight pattern make a large quantity of objects share a common properties object to save space.
 
A flyweight is an object that minimizes memory use by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory. Often some parts of the object state can be shared, and it is common practice to hold them in external data structures and pass them to the flyweight objects temporarily when they are used. optimization does come at a price in complexity. 

#### Rules Of Thumb:
+ Facade is a higher-level (read: simpler) interface to a subsystem of one or more classes. Suppose you have a complex concept that requires multiple objects to represent. Making changes to that set of objects is confusing, because you don't always know which object has the method you need to call. That's the time to write a Facade that provides high-level methods for all the complex operations you can do to the collection of objects. Example: a Domain Model for a school section, with methods like countStudents(), 
+ Abstract Factory can be used as an alternative to Facade to hide platform-specific classes.

#### Nice articles: