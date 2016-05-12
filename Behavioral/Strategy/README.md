##### Strategy pattern: Algorithms can be selected on the fly.

#### Files:
+ strategy.js: A nice simple example.

#### Some notes:
+ This pattern seems to be very similar to Factory, Command and others. The main difference is that it is one to many pattern (one object can have many strategies).
+ controller is the strategy for the view in MVC model, see [here](http://stackoverflow.com/questions/10064105/mvc-why-controller-is-the-strategy-for-the-view). 
+ Strategy is like Template method except in its granularity.
+ Strategy has 2 different implementations, the first is similar to State. The difference is in binding times (Strategy is a bind-once pattern, whereas State is more dynamic).

#### Nice articles:
+ http://robdodson.me/javascript-design-patterns-strategy/




