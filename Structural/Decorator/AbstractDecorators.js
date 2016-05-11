// This is a more close to the decorate pattern in other programming languages.
// from Pro JavaScript Design Pattern book

// You understand that you have a Problem you can solve with decorate when you see this:
var Macbook = function(){
        //...
};
 
// You need a subclass for every different element?
var  MacbookWith4GBRam = function(){},
     MacbookWith8GBRam = function(){},
     MacbookWith4GBRamAndEngraving = function(){},
     MacbookWith8GBRamAndEngraving = function(){},
     MacbookWith8GBRamAndParallels = function(){},
     MacbookWith4GBRamAndParallels = function(){},
     MacbookWith8GBRamAndParallelsAndCase = function(){},
     MacbookWith4GBRamAndParallelsAndCase = function(){},
     MacbookWith8GBRamAndParallelsAndCaseAndInsurance = function(){},
     MacbookWith4GBRamAndParallelsAndCaseAndInsurance = function(){};

// solution
 
// A Macbook Pro might thus be represented as follows:
var MacbookPro = function(){
    // implements Macbook
};
 
MacbookPro.prototype = {
    addEngraving: function(){
    },
    addParallels: function(){
    },
    add4GBRam: function(){
    },
    add8GBRam:function(){
    },
    addCase: function(){
    },
    getPrice: function(){
      // Base price
      return 900.00;
    }
};

// Macbook decorator abstract decorator class
var MacbookDecorator = function( macbook ){
    this.macbook = macbook;
};
 
MacbookDecorator.prototype = {
    addEngraving: function(){
        return this.macbook.addEngraving();
    },
    addParallels: function(){
        return this.macbook.addParallels();
    },
    add4GBRam: function(){
        return this.macbook.add4GBRam();
    },
    add8GBRam:function(){
        return this.macbook.add8GBRam();
    },
    addCase: function(){
        return this.macbook.addCase();
    },
    getPrice: function(){
        return this.macbook.getPrice();
    }
};

// First, define a way to extend an object a
// with the properties in object b. 
function extend( a, b ){
    for( var key in b )
        if( b.hasOwnProperty(key) )
            a[key] = b[key];
    return a;
}
 
var CaseDecorator = function( macbook ){
   this.macbook = macbook;
};
 
CaseDecorator.prototype.addCase = function(){
    return this.macbook.addCase() + "Adding case to macbook";
};
 
CaseDecorator.prototype.getPrice = function(){
    return this.macbook.getPrice() + 45.00;
};

var add4GBRamDecorator = function( macbook ){
   this.macbook = macbook;
};

add4GBRamDecorator.prototype.add4GBRam = function(){
    return this.macbook.add4GBRam() + "Adding case to macbook";
};
 
add4GBRamDecorator.prototype.getPrice = function(){
    return this.macbook.getPrice() + 45.00;
};

// Instantiation of the macbook
var myMacbookPro = new MacbookPro();
 
// Outputs: 900.00
console.log( myMacbookPro.getPrice() );
 
// Decorate the macbook
var decoratedMacbookPro = new CaseDecorator( myMacbookPro );
 
// This will return 945.00
console.log( decoratedMacbookPro.getPrice() );

// Decorate the macbook
var decoratedMacbookPro = new add4GBRamDecorator( decoratedMacbookPro );
 
// This will return 945.00
console.log( decoratedMacbookPro.getPrice() );