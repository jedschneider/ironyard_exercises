// Javascript solution without dependencies
function anagram ( target ) {
  var downSortTarget = target.toLowerCase().split('').sort().join('');

  function matches( possibles ) {
    var result = [];
    var possibles = possibles instanceof Array ? possibles :
      Array.prototype.slice.call(arguments);
    // for each possiblity...
    possibles.forEach( function( possible ) {
      // ...push if it is a match
      if (isMatch(possible)) { result.push(possible) };
    });
    // and return the results
    return result;
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
