var isSubset = require('./isSubset.js');

describe('Extra Credit', function() {
  var arr1 = [
    { name: 'John', age: 25},
    { name: 'Jane', age: 58},
    { name: 'Josh', age: 12}
  ];
  var arr2 = [
    { name: 'Jane', age: 58},
    { name: 'John', age: 25}
  ];
  var arr3 = [
    { name: 'John', age: 25},
    { name: 'Jane', age: 58}    
  ];

  it("array1 is not a subset of array2", function() {
    expect(isSubset(arr1,arr2)).toEqual(false);
  });

  it("array2 is a subset of array3", function() {
    expect(isSubset(arr2,arr3)).toEqual(true);
  });

  it("array2 is a subset of array1", function() {
    expect(isSubset(arr2,arr1)).toEqual(true);
  });

  it("empty set is a subset of anything", function() {
    expect(isSubset([],arr1)).toEqual(true);
  });

  it("works with arrays of integers", function() {
    var a = [1,2,3];
    var b = [1,2,3,4];
    expect(isSubset(a,b)).toEqual(true);
  });

  it("works with strings", function() {
    var a = "fish";
    var b = "fishfry";
    expect(isSubset(a,b)).toEqual(true);
  });
});