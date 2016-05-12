var iterator = (function() {
  var index = 0,
      data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      length = data.length;

  return {
    // next will return the next value and advance the index by 3.
    next: function() {
      var element;
      if (!this.hasNext()) {
          return null;
      }
      element = data[index];
      index += 3;
      return element;
    },
    // hasNext will check to see if calling next will actually return an item.
    // Good for indicating when we've reached the end of a collection.
    hasNext: function() {
        return index < length;
      },
    // rewind will reset the index to zero so we can loop over the collection again.
    rewind: function() {
      index = 0;
      return data[index];
    },
    // current will return the current item at the index without advancing the index.
    current: function() {
      return data[index];
    }
  }
}());

while(iterator.hasNext()) {  
    console.log(iterator.next());
}

iterator.rewind();  
console.log(iterator.current());  
/* output
  1
  4
  7
  10
  1
*/