##### Prototype specifies the kind of object to create using a prototypical instance, and creates new objects by cloning this prototype.

This pattern is used to:
+ avoid subclasses of an object creator in the client application, like the abstract factory pattern does.
+ avoid the inherent cost of creating a new object in the standard way (e.g., using the 'new' keyword) when it is prohibitively expensive for a given application.

#### Rules Of Thumb:
+ Sometimes creational patterns are competitors: there are cases when either Prototype or Abstract Factory could be used profitably.
+ Abstract Factory classes are often implemented with Factory Methods, but they can also be implemented using Prototype.
+ Prototype doesn't require subclassing, but it does require an Initialize operation. Factory Method requires subclassing, but doesn't require Initialize.
+ Designs that make heavy use of the Composite and Decorator patterns often can benefit from Prototype as well.

#### Nice articles: