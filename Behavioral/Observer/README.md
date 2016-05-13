##### Observer pattern aka Publish/Subscribe or Event Listener,is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods. It is mainly used to implement distributed event handling systems. 

The observer pattern can cause memory leaks, known as the lapsed listener problem, because in basic implementation it requires both explicit registration and explicit deregistration, as in the dispose pattern, because the subject holds strong references to the observers, keeping them alive. This can be prevented by the subject holding weak references to the observers.

#### Rules Of Thumb:
+ The Observer pattern is also a key part in the familiar model–view–controller (MVC) architectural pattern.
+ The observer pattern is implemented in numerous programming libraries and systems, including almost all GUI toolkits.
+ You can use a ready implement from many libraries. See an exampl in usignJquery usingJqueryORDojoORYUI.js file

#### Nice articles:
+ http://stackoverflow.com/questions/12590091/jquery-observer-pattern