##### Visitor pattern: A way to separate an algorithm from an object

#### Files:
#### Some notes:
+ Adds a new operation to a class without changing the class.
+ The main object will always have to have an accept() method while the visitor object always need to have a visit() method. This visit() method should be able to be overloaded and accepts inputs of different types and at runtime the program decides which visit() method to run.
+ The Visitor pattern is like a more powerful Command pattern because the visitor may initiate whatever is appropriate for the kind of object it encounters.

#### Nice articles:
+ http://stackoverflow.com/questions/9831415/how-to-implement-visitor-pattern-in-javascript
+ http://www.codingepiphany.com/2013/04/13/back-to-basics-visitor-pattern-explanation-with-js-example/