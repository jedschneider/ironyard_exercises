var _ =  require('./bower_components/underscore/underscore-min.js');

// returns true if arr1 is contained by arr2 (if arr1 is a subset of
// arr2)
function isSubset( arr1, arr2 ) {
  // arr1 is a subset of arr2 if all of the values in arr1 are
  // included in arr2. NOTE: This also means an empty array is a
  // subset of all others (this is in accordence with set theory where
  // the empty set is included in all sets)
  var included = _.map(arr1, function(item) {
                   return myIncludes(arr2, item)});
  return _.all(included);
};

// helper functions
// ----------------
function myIncludes( arr, itemA ) {
  return _.any(_.map(arr, function(itemB) {
                 return _.isEqual(itemA,itemB);
               }));
};

module.exports = isSubset