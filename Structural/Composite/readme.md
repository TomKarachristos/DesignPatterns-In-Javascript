##### Composite pattern describes that a group of objects is to be treated in the same way as a single instance of an object. The intent of a composite is to "compose" objects into tree structures to represent part-whole hierarchies. 

The key concept is that you can manipulate a single instance of the object just as you would manipulate a group of them. The operations you can perform on all the composite objects often have a least common denominator relationship. For example, if defining a system to portray grouped shapes on a screen, it would be useful to define resizing a group of shapes to have the same effect (in some sense) as resizing a single shape.

#### Rules Of Thumb:
+ A composite should have a HAS-A relationship with its children, not an IS-A relationship
+ Usuay a composite use a tree like data structures for the implementation
+ Composite can be very helpfull in javascirpt, you can threts to a collection of dom in the same way!
+ You should only use the composite pattern when you have both of the following: (1)Groups of objects, in some sort of hierarchy (the exact structure of which could be unknown at development time) (2)An operation you want to perform on those objects, or on some subset of them

#### Nice articles:
