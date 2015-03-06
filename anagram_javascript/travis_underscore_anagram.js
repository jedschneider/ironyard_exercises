var _ =  require('./bower_components/underscore/underscore-min.js');

// Javascript solution using underscore
function anagram ( target ) {
  var downSortTarget = target.toLowerCase().split('').sort().join('');

  function matches( possibles ) {
    // make sure we gots an array
    var possibles = possibles instanceof Array ? possibles :
      Array.prototype.slice.call(arguments);
    return _.filter( possibles, isMatch );
  };

  return { matches: matches };

  // a possible is a match if it is not an exact match and if when
  // downcased and sorted it is equal to the target downcased and
  // sorted
  function isMatch( possible ) {
    var downSortPossible = possible.toLowerCase().split('').sort().join('');
    return ( possible.toLowerCase() != target.toLowerCase() ) &&
      ( downSortPossible == downSortTarget );
  };

};

module.exports = anagram