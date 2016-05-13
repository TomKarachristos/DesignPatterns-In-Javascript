##### Adapter pattern: 'adapts' one interface for a class into one that a client expects.

An adapter helps two incompatible interfaces to work together. This is the real world definition for an adapter. Interfaces may be incompatible but the inner functionality should suit the need. The Adapter design pattern allows otherwise incompatible classes to work together by converting the interface of one class into an interface expected by the clients.

There are two types of adapter patterns:
+ Object Adapter pattern: In this type of adapter pattern, the adapter contains an instance of the class it wraps. In this situation, the adapter makes calls to the instance of the wrapped object.
+ Class Adapter pattern: This type of adapter uses multiple polymorphic interfaces implementing or inheriting both the interface that is expected and the interface that is pre-existing. It is typical for the expected interface to be created as a pure interface class, especially in languages such as Java (before jdk 1.8) that do not support multiple inheritance of classes.

#### Rules Of Thumb:
+ Proxy, Decorator, Adapter, and Bridge are all variations on "wrapping" a class. But their uses are different.
+ The Adapter pattern is geared toward making unrelated classes work together. 
+ Adapter makes things work after they're designed; Bridge makes them work before they are.
+ Adapter provides a different interface to its subject. Proxy provides the same interface. Decorator provides an enhanced interface.
+ Many guys use a adapter pattern when they use a third-library and full it with unit testing, so when library updates if test unit fails than just change the adapter.
+ The adapter translates calls to its interface into calls to the original interface and the code required to achieve this is usually quite minimal.
+ An adapter converts one interface to another; it doesn’t remove any abilities or otherwise simplify the interface. 
+ Adapters can be used for clients that expect an API that isn’t available.
+ The Adapter pattern is geared toward making unrelated classes work together. 
It is usually applied to systems after they're designed. Bridge, on the other 
hand, is used up-front in a design to let abstractions and implementations vary 
independently.(GOF)

#### Nice articles:
+ http://khaledsmulti.blogspot.gr/2013/09/adapter-vs-bridge-pattern-with-real.html