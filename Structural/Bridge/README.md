##### Bridge pattern decouple an abstraction from its implementation so that the two can vary independently.

The bridge uses encapsulation, aggregation, and can use inheritance to separate responsibilities into different classes.

When a class varies often, the features of object-oriented programming become very useful because changes to a program's code can be made easily with minimal prior knowledge about the program. The bridge pattern is useful when both the class and what it does vary often. The class itself can be thought of as the abstraction and what the class can do as the implementation. The bridge pattern can also be thought of as two layers of abstraction.

The bridge pattern is often confused with the adapter pattern. In fact, the bridge pattern is often implemented using the class adapter pattern.

#### Rules Of Thumb:
+ Proxy, Decorator, Adapter, and Bridge are all variations on "wrapping" a class. But their uses are different.
+ Adapter makes things work after they're designed; Bridge makes them work before they are.
+ Bridge is very similar to Adapter, but we call it Bridge when you define both the abstract interface and the underlying implementation. I.e. you're not adapting to some legacy or third-party code, you're the designer of all the code but you need to be able to swap out different implementations.
+ The Adapter pattern is geared toward making unrelated classes work together. 
It is usually applied to systems after they're designed. Bridge, on the other 
hand, is used up-front in a design to let abstractions and implementations vary 
independently.(GOF)

#### Nice articles:
+ https://alexsexton.com/blog/2010/02/using-inheritance-patterns-to-organize-large-jquery-applications/
+ http://khaledsmulti.blogspot.gr/2013/09/adapter-vs-bridge-pattern-with-real.html
