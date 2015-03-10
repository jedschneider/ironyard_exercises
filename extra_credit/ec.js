var _ = require('underscore');
var array1 = [
  { name: 'John', age: 25},
  { name: 'Jane', age: 58},
  { name: 'Josh', age: 12}
];
var array2 = [
  { name: 'Jane', age: 58},
  { name: 'John', age: 25}
];
var array3 = [
  { name: 'John', age: 25},
  { name: 'Jane', age: 58}           
];
// answer = the daily double(holy crap underscore is amazing)
var arrayContainsAllMembersOf = function(arrayA, arrayB) {
	_.each(arrayA, function (elementA){
		if (_.contains(arrayB, elementA)) {return false}});return true;}
_.each([array1, array2, array3]) function(arrayA){
	_.each([array1, array2, array3]) function(arrayB){
		console.log(arrayContainsAllMembersOf(arrayA, arrayB));
}

	