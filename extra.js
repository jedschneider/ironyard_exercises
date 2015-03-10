var array1 = [
  { name: 'John', age: 25},
  { name: 'Jane', age: 58},
  { name: 'Josh', age: 12}
]

var array2 = [
  { name: 'Jane', age: 58},
  { name: 'John', age: 25}
]

var array3 = [
  { name: 'John', age: 25},
  { name: 'Jane', age: 58}           
]



array1IsASubsetOf(array2) // false
array2IsASubsetOf(array3) // true
array2IsASubsetOf(array1) // true

function isSubset(subset, main) {
  Object.getOwnPropertyNames(subset).forEach(function(subKey, idx, array) {
    Object.getOwnPropertyNames(main).forEach(function(mainKey, idx, array) {
      if (subset)
}

    // print(val + ' -> ' + obj[val]);
