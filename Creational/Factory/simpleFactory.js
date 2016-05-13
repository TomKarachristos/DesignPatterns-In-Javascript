// A simple factory
var UserFactory = function() {};
var Admin = function() {console.log("make a admin");};
var Customer = function() {console.log("make a Customer");};
UserFactory.createUser = function(type) {  
    if (type == 'admin') {
        return new Admin();
    } else if (type == 'customer') {
        return new Customer();
    }
};

var admin = UserFactory.createUser('admin');  
var customer = UserFactory.createUser('customer');
var user = UserFactory.createUser();