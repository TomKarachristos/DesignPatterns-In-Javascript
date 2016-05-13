##### Strategy pattern, algorithms can be selected on the fly.

The strategy pattern (also known as the policy pattern) is a software design pattern that enables an algorithm's behavior to be selected at runtime. The strategy pattern
+ defines a family of algorithms,
+ encapsulates each algorithm, and
+ makes the algorithms interchangeable within that family.

Strategy lets the algorithm vary independently from clients that use it.

For instance, a class that performs validation on incoming data may use a strategy pattern to select a validation algorithm based on the type of data, the source of the data, user choice, or other discriminating factors. These factors are not known for each case until run-time, and may require radically different validation to be performed. The validation strategies, encapsulated separately from the validating object, may be used by other validating objects in different areas of the system (or even different systems) without code duplication.


#### Rules Of Thumb:
+ This pattern seems to be very similar to Factory, Command and others. The main difference is that it is one to many pattern (one object can have many strategies).
+ controller is the strategy for the view in MVC model, see [here](http://stackoverflow.com/questions/10064105/mvc-why-controller-is-the-strategy-for-the-view). 
+ Strategy is like Template method except in its granularity.
+ Strategy has 2 different implementations, the first is similar to State. The difference is in binding times (Strategy is a bind-once pattern, whereas State is more dynamic).

#### Nice articles:
+ http://robdodson.me/javascript-design-patterns-strategy/




