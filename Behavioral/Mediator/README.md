##### Mediator pattern: Provides a unified interface to a set of interfaces in a subsystem.

#### Files:
+ mediator.js: A vary nice example with a chat using mediator.
+ mediatorVsObserver: Here you can see the differents from observer.

#### Some notes:
+ A real-world analogy could be a typical airport traffic control system. A tower (Mediator) handles what planes can take off and land because all communications (notifications being listened out for or broadcast) are done from the planes to the control tower, rather than from plane-to-plane. A centralized controller is key to the success of this system and that's really the role a Mediator plays in software design.
+ Introduces a single point of failure

#### Nice articles:
+ http://jonathancreamer.com/javascript-patterns-mediator-vs-observer/