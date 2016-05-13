##### Object Pool avoid expensive acquisition and release of resources by recycling objects that are no longer in use.

Object pooling is the process of retaining a set of unused objects which share a type. When you need a new object for your code, rather than allocating a new one from the system Memory Heap, you instead recycle one of the unused objects from the pool. Once the external code is done with the object, rather than releasing it to main memory, it is returned to the pool

#### Rules Of Thumb:
+ It be using by almost all games.
+ Object Pools are usually implemented as Singletons.

#### Nice articles:
+ https://github.com/emehrkay/Pool/blob/master/README.md
+ http://www.html5rocks.com/en/tutorials/speed/static-mem-pools/
