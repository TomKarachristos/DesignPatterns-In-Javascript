##### Singleton ensures that a class only has one instance, and provides a global point of access to it.

##### Branching is a technique that allows you to encapsulate browser differences into dynamic methods that get set at run-time

Singletons are often preferred to global variables because:
+ They do not pollute the global namespace (or, in languages with namespaces, their containing namespace) with unnecessary variables.
+ They permit lazy allocation and initialization, whereas global variables in many languages will always consume resources.

There are some who are critical of the singleton pattern and consider it to be an anti-pattern in that it is frequently used in scenarios where it is not beneficial, introduces unnecessary restrictions in situations where a sole instance of a class is not actually required, and introduces global state into an application

#### Rules Of Thumb:
+ Singletons can increase tight coupling!
+ The Abstract Factory, Builder, and Prototype patterns can use Singletons in their implementation.
+ Facade objects are often singletons because only one Facade object is required.
+ State objects are often singletons.
+ A virtual proxy can be used instead of a lazy loading singleton when you want a little more control over how the class gets instantiated. A true object factory can be used instead of a branching singleton (although that factory may also be a singleton).

#### Nice articles:
+ https://programmers.stackexchange.com/questions/40373/so-singletons-are-bad-then-what/40610#40610
+ http://www.ibm.com/developerworks/webservices/library/co-single/index.html