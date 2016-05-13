##### Iterator pattern is used to access the elements of an aggregate object sequentially without exposing its underlying representation.

The iterator pattern decouples algorithms from containers; in some cases, algorithms are necessarily container-specific and thus cannot be decoupled. For example, the hypothetical algorithm SearchForElement can be implemented generally using a specified type of iterator rather than implementing it as a container-specific algorithm. This allows SearchForElement to be used on any container that supports the required type of iterator.

#### Rules Of Thumb:
+ jQuery.fn.each() iterator, we are actually able to use the underlying code behind jQuery.each() to iterate through a collection, without needing to see or understand the code working behind the scenes providing this capability.

#### Nice articles:
+ http://robdodson.me/javascript-design-patterns-iterator/