##### Chain of responsibility pattern: Command objects are handled or passed on to other objects by logic-containing processing objects

#### Files:
+ chainOfRepsonsibilitty.js: a skeleton of the pattern, and two real examples with different ways to use the pattern.

#### Some notes:
+ This pattern is used internally in JavaScript to handle event capturing and
bubbling. 
+ Allows you to decouple the sender and the receiver of a request. This is accomplished by implementing a chain of objects that implicitly handles the request. Each object in the chain can handle the request or pass it on to the next object. 
+ The sender is the object that makes the request. The receivers are the objects in the chain that receive this request and handle it or pass it on
+ Each receiver only knows about one other object, its successor in the chain.
+ When you see in code(especially inside the Jquery source code)"return this" most luckly you see a Chain of repsonsibility pattern.
+ Chain of responsibility can use Command to represent requests as objects.

#### Nice articles:
+ https://www.joezimjs.com/javascript/javascript-design-patterns-chain-of-responsibility/

//TODO promises chain