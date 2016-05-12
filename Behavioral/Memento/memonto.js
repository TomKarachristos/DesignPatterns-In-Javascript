// from http://www.dofactory.com/javascript/memento-design-pattern

// implements interface to create and restore mementos of itself 
var Person = function(name, street, city, state) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
}
 
Person.prototype = {
 
    hydrate: function() {// create 
        var memento = JSON.stringify(this);
        return memento;
    },
 
    dehydrate: function(memento) {// restore
        var m = JSON.parse(memento);
        this.name = m.name;
        this.street = m.street;
        this.city = m.city;
        this.state = m.state;
    }
}
 
// responsible for storing mementos.
// just a repository; does not make changes to mementos
var CareTaker = function() {
    this.mementos = {};
 
    this.add = function(key, memento) {
        this.mementos[key] = memento;
    },
 
    this.get = function(key) {
        return this.mementos[key];
    }
}
 
var mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
var john = new Person("John Wang", "48th Street", "San Jose", "CA");
var caretaker = new CareTaker();

// save state

caretaker.add(1, mike.hydrate());
caretaker.add(2, john.hydrate());

// mess up their names

mike.name = "King Kong";
john.name = "Superman";

// restore original state

mike.dehydrate(caretaker.get(1));
john.dehydrate(caretaker.get(2));

console.log(mike.name);
console.log(john.name);
