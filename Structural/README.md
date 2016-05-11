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

#### Rules Of Thumb
+ Adapter makes things work after they're designed; Bridge makes them work before they are
+ Adapter provides a different interface to its subject. Proxy provides the same interface. Decorator provides an enhanced interface.
+ Composite and Decorator have similar structure diagrams, reflecting the fact that both rely on recursive composition to organize an open-ended number of objects.
+ Composite can be traversed with Iterator. Visitor can apply an operation over a Composite. Composite could use Chain of responsibility to let components access global properties through their parent. It could also use Decorator to override these properties on parts of the composition. It could use Observer to tie one object structure to another and State to let a component change its behavior as its state changes.
+ Facade objects are often Singleton because only one Facade object is required.
+ Abstract Factory can be used as an alternative to Facade to hide platform-specific classes.
+ Flyweight explains when and how State objects can be shared.

+ A proxy object does not add or modify methods to another object (as a decorator would) or simplify the interface of another object (as a facade would do). It implements the exact same interface as the real subject does and passes on method invocations made on it to the real subject
+ A remote proxy is used to access an object in a different environment. With Java, this could mean an object in a different virtual machine, or an object on a computer on the other side of the world. The remote object is usually persistent; it is accessible at any time from any other environment. This type of proxy is difficult to translate to JavaScript. You can use remote proxy for cache reasons in javascript.
+A protection proxy is also hard to translate into JavaScript. In other languages, it is typically used to control access to certain methods based on who the client is. Let’s say you add a few methods to the PublicLibrary class. These would be methods for adding books to and removing books from the catalog. In Java you could use a protection proxy to restrict access to these methods to clients of a particular type, say Librarian. No other type of client would be able to invoke these methods. In JavaScript, you can’t determine the type of the client that made a particular method call, which makes this particular pattern impossible to implement. 
+ The virtual proxy is an optimization pattern. If you have a class or object that has a computationally intensive constructor or uses large amounts of memory to store its data, and you don’t need to access the data immediately after instantiation, a virtual proxy should be used to defer the setup costs until the data is needed. It can also provide a type of “Loading...” message while the setup is taking place, allowing you to maintain a responsive user interface and avoid having a blank page with no feedback telling the user what is happening


#### Reference:
+ Wiki
+ Pro JavaScript Design Patterns, Ross Harmes and Dustin Diaz
+ https://sourcemaking.com/design_patterns
