// Object pooling is the process of retaining a set of unused objects which share a type.
// When you need a new object for your code, rather than allocating a new one from the system Memory Heap,
// you instead recycle one of the unused objects from the pool.
// Once the external code is done with the object, rather than releasing it to main memory, it is returned to the pool

// Object Pools are usually implemented as Singletons.

// A full example here http://jsfiddle.net/XkTPJ/
(function(){
  function Pool(objects){
      this.queue = [];
      this.objects = objects;
  };
  Pool.prototype.add = function(object){
      this.objects.push(object);
      this.call();
  };
  Pool.prototype.call = function(){
      if(this.objects.length && this.queue.length){
          var fn = this.queue.shift(),
              obj = this.objects.shift();
              
          fn(obj, this);
      }
  };
  //Pool.act() takes a function whose signature is one of the pooled objects and the pool itself.
  Pool.prototype.act = function(fn){
      this.queue.push(fn);
      this.call();
  };
  this.Pool = Pool;
}());

Request = function(name){
  this.name = name;
  this.showName = function(){
    console.log(this.name);
  }
}

var objs = [new Request("1"), new Request("2"), new Request("3")];
var request_pool = new Pool(objs); // Here object Pools is not  a singleton


request_pool.act(function(request, pool){
  request.showName();
  // put the object back when you're done with it
  pool.add(request);
  // or you can use a events with observer design patterns
});
