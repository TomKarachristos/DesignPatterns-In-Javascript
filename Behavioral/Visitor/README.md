##### Visitor pattern: A way to separate an algorithm from an object. A practical result of this separation is the ability to add new operations to existing object structures without modifying those structures. It is one way to follow the open/closed principle.

In essence, the visitor allows one to add new virtual functions to a family of classes without modifying the classes themselves; instead, one creates a visitor class that implements all of the appropriate specializations of the virtual function. The visitor takes the instance reference as input, and implements the goal through double dispatch.

Consider two objects, each of some class type; one is called the "element", and the other is called the "visitor". An element has an accept method that can take the visitor as an argument. The accept method calls a visit method of the visitor; the element passes itself as an argument to the visit method

#### Some notes:
+ Adds a new operation to a class without changing the class.
+ The main object will always have to have an accept() method while the visitor object always need to have a visit() method. This visit() method should be able to be overloaded and accepts inputs of different types and at runtime the program decides which visit() method to run.
+ The Visitor pattern is like a more powerful Command pattern because the visitor may initiate whatever is appropriate for the kind of object it encounters.

#### Nice articles:
+ http://stackoverflow.com/questions/9831415/how-to-implement-visitor-pattern-in-javascript
+ http://www.codingepiphany.com/2013/04/13/back-to-basics-visitor-pattern-explanation-with-js-example/