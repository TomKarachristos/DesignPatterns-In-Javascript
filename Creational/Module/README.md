##### Module pattern is a design pattern used to implement the concept of software modules, defined by modular programming, in a programming language with incomplete direct support for the concept.

##### The Revealing Module pattern came about as Christian Heilmann’s was frustrated with the fact that he had to repeat the name of the main object when we wanted to call one public method from another or access public variables.

In software development, source code can be organized into components that accomplish a particular function or contain everything necessary to accomplish a particular task. Modular programming is one of those approaches.

This pattern can be implemented in several ways depending on the host programming language, such as the singleton design pattern, object-oriented static members in a class and procedural global functions.

#### Rules Of Thumb:
+ Used from many libraries in javascript, and realy is one way to go if you use pure javascript for develop.
+ module many often will be a singleton.

#### Nice articles:
+ https://www.christianheilmann.com/2007/08/22/again-with-the-module-pattern-reveal-something-to-the-world/
