##### Facade pattern create a simplified interface of an existing interface to ease usage for common tasks.

A facade is an object that provides a simplified interface to a larger body of code, such as a class library. A facade can:
+ make a software library easier to use, understand and test, since the facade has convenient methods for common tasks;
+ make the library more readable, for the same reason;
+ reduce dependencies of outside code on the inner workings of a library, since most code uses the facade, thus allowing more flexibility in developing the system;
+ wrap a poorly designed collection of APIs with a single well-designed API.

#### Rules Of Thumb:
+ Facade make worse the performance.
+ The facade pattern does two things: it simplifies the interface of a class, and it decouples that
class from the client code that uses it.
+ Facades are the core principle behind nearly all JavaScript libraries.
+ Facade objects are often Singleton because only one Facade object is required.
+ A facade is not used to allow interaction with clients that require a particular interface; it is used to provide a simpler interface.

#### Nice articles: