// The Composite Pattern describes a group of objects that can be treated in the same way
// a single instance of an object may be.


// from here http://www.dofactory.com/javascript/composite-design-pattern
var Node = function (name) {
  this.children = []; // we just use a array
  //declares the interface for objects in the composition
  this.name = name;
}
 
Node.prototype = {
  add: function (child) {
  	// Each item in the collection can hold other collections themselves, creating deeply nested structures.
  	// Leaf
    this.children.push(child);
  },
  remove: function (child) {
    var length = this.children.length;
    for (var i = 0; i < length; i++) {
        if (this.children[i] === child) {
            this.children.splice(i, 1);
            return;
        }
    }
  },
  getChild: function (i) {
    return this.children[i];
  },
  hasChildren: function () {
    return this.children.length > 0;
  }
}
 
// recursively traverse a (sub)tree
function traverse(indent, node) {
    console.log(Array(indent++).join("--") + node.name);
    for (var i = 0, len = node.children.length; i < len; i++) {
        traverse(indent, node.getChild(i));
    }
}
 
var tree = new Node("root");
var left = new Node("left")
var right = new Node("right");
var leftleft = new Node("leftleft");
var leftright = new Node("leftright");
var rightleft = new Node("rightleft");
var rightright = new Node("rightright");

tree.add(left);
tree.add(right);
tree.remove(right);  // note: remove
tree.add(right);

left.add(leftleft);
left.add(leftright);

right.add(rightleft);
right.add(rightright);

traverse(1, tree);