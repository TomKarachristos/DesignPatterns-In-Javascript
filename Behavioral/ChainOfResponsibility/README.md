##### Chain of responsibility pattern are command objects are handled or passed on to other objects by logic-containing processing objects

Each processing object contains logic that defines the types of command objects that it can handle; the rest are passed to the next processing object in the chain. A mechanism also exists for adding new processing objects to the end of this chain.

In a variation of the standard chain-of-responsibility model, some handlers may act as dispatchers, capable of sending commands out in a variety of directions, forming a tree of responsibility. In some cases, this can occur recursively, with processing objects calling higher-up processing objects with commands that attempt to solve some smaller part of the problem; in this case recursion continues until the command is processed, or the entire tree has been explored. An XML interpreter might work in this manner.
This pattern promotes the idea of loose coupling.

#### Rules Of Thumb:
+ This pattern is used internally in JavaScript to handle event capturing and
bubbling. 
+ Allows you to decouple the sender and the receiver of a request. This is accomplished by implementing a chain of objects that implicitly handles the request. Each object in the chain can handle the request or pass it on to the next object. 
+ The sender is the object that makes the request. The receivers are the objects in the chain that receive this request and handle it or pass it on
+ Each receiver only knows about one other object, its successor in the chain.
+ When you see in code(especially inside the Jquery source code)"return this" most luckly you see a Chain of repsonsibility pattern.
+ Chain of responsibility can use Command to represent requests as objects.

#### Nice articles:
+ https://www.joezimjs.com/javascript/javascript-design-patterns-chain-of-responsibility/
