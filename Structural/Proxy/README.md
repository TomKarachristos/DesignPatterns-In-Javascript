##### Proxy pattern: a class functioning as an interface to another thing.

#### Files:
+ proxy.js: Two examples, one very simple.
+ jquery.js: You can see how to use $.proxy and the code that impliment this function from the jquery code.

#### Some notes:
+ A proxy object does not add or modify methods to another object (as a decorator would) or simplify the interface of another object (as a facade would do). It implements the exact same interface as the real subject does and passes on method invocations made on it to the real subject.
+ A remote proxy is used to access an object in a different environment. With Java, this could mean an object in a different virtual machine, or an object on a computer on the other side of the world. The remote object is usually persistent; it is accessible at any time from any other environment. This type of proxy is difficult to translate to JavaScript. You can use remote proxy for cache reasons in javascript.
+ A protection proxy is also hard to translate into JavaScript. In other languages, it is typically used to control access to certain methods based on who the client is. Let’s say you add a few methods to the PublicLibrary class. These would be methods for adding books to and removing books from the catalog. In Java you could use a protection proxy to restrict access to these methods to clients of a particular type, say Librarian. No other type of client would be able to invoke these methods. In JavaScript, you can’t determine the type of the client that made a particular method call, which makes this particular pattern impossible to implement.
+ The virtual proxy is an optimization pattern. If you have a class or object that has a computationally intensive constructor or uses large amounts of memory to store its data, and you don’t need to access the data immediately after instantiation, a virtual proxy should be used to defer the setup costs until the data is needed. It can also provide a type of “Loading...” message while the setup is taking place, allowing you to maintain a responsive user interface and avoid having a blank page with no feedback telling the user what is happening.

#### Nice articles:
+ https://www.joezimjs.com/javascript/javascript-design-patterns-proxy/