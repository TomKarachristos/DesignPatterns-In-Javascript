##### Singleton ensures that a class only has one instance, and provides a global point of access to it.

#### Files:
singleton.js: Two examples of singleton. The second is lazy loading singleton.
brancing.js: Branching is a technique that allows you to encapsulate browser differences into dynamic methods that get set at run-time.

#### Some notes:
+ Singletons can increase tight coupling!
+ A virtual proxy can be used instead of a lazy loading singleton when you want a little more control over how the class gets instantiated. A true object factory can be used instead of a branching singleton (although that factory may also be a singleton).

#### nice articles:
+ https://programmers.stackexchange.com/questions/40373/so-singletons-are-bad-then-what/40610#40610
+ http://www.ibm.com/developerworks/webservices/library/co-single/index.html