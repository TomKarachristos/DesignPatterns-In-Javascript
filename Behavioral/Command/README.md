##### Command pattern, an object is used to encapsulate all information needed to perform an action or trigger an event at a later time.

Four terms always associated with the command pattern are command, receiver, invoker and client. A command object knows about receiver and invokes a method of the receiver. Values for parameters of the receiver method are stored in the command. The receiver then does the work. An invoker object knows how to execute a command, and optionally does bookkeeping about the command execution. The invoker does not know anything about a concrete command, it knows only about command interface. Both an invoker object and several command objects are held by a client object. The client decides which commands to execute at which points. To execute a command, it passes the command object to the invoker object.

#### Rules Of Thumb:
+ Command can use Memento to maintain the state required for an undo operation.
+ it enables us to decouple objects invoking the action from the objects which implement them, giving us a greater degree of overall flexibility in swapping out concrete classes (objects).
+ A Command that must be copied before being placed on a history list acts as a Prototype.
+ Chain of Responsibility can use Command to represent requests as objects.

#### Nice articles:
