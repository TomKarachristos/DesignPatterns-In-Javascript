##### Command pattern: Command objects encapsulate an action and its parameterss

#### Files:
+ command.js: two very nice examples.

#### Some notes:
+ it enables us to decouple objects invoking the action from the objects which implement them, giving us a greater degree of overall flexibility in swapping out concrete classes (objects).
+ A Command that must be copied before being placed on a history list acts as a Prototype.


#### Nice articles:
+ https://www.joezimjs.com/javascript/javascript-design-patterns-chain-of-responsibility/

//TODO promises chain