##### Decorator pattern add additional functionality to a class at runtime where subclassing would result in an exponential rise of new classes.

The decorator pattern is an alternative to subclassing. Subclassing adds behavior at compile time, and the change affects all instances of the original class; decorating can provide new behavior at run-time for selective objects.

The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern.

#### Rules Of Thumb:
+ Proxy, Decorator, Adapter, and Bridge are all variations on "wrapping" a class. But their uses are different.
+ Decorator is also called "Smart Proxy." This is used when you want to add functionality to an object, but not by extending that object's type. This allows you to do so at runtime.
+ Adapter provides a different interface to its subject. Proxy provides the same interface. Decorator provides an enhanced interface.
+ Composite and Decorator have similar structure diagrams, reflecting the fact that both rely on recursive composition to organize an open-ended number of objects.
+ Composite can be traversed with Iterator. Visitor can apply an operation over a Composite. Composite could use Chain of responsibility to let components access global properties through their parent. It could also use Decorator to override these properties on parts of the composition. It could use Observer to tie one object structure to another and State to let a component change its behavior as its state changes.

#### Nice articles:
+ Head First Design Patterns by Eric Freeman, Elisabeth Robson, Bert Bates, Kathy Sierra have an amazing chapter about decorator pattern, I suggested.
