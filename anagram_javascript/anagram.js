// the first is my initial trial, the second is an attempt after having talked to Ryan and looked at his code. 
module.export = anagram;

function anagram(word){
 subject = word.toLowerCase().sort();
  return {
    function match(list) {
      var my_list = []
      my_list.unshift(list)
      // I do not think this will work with multiple arguments
      
      for (var prop in my_list) {
        if (prop.toLowerCase() == subject.toLowerCase()) {;}
          else if (prop.toLowerCase().sort == subject.toLowerCase().sort){
            list.unshift(prop);}
          else {;}
      }
    list = anagram
    anagram
    }
  }
}

module.export = anagram;

function anagram(word){
  var subject = [];// Do i need to specify that this is an array or will sort force it to be an array like in ruby? I've specified the split to be a string. Can I just use [] inside sort() ? And for that matter, is split even necessary?
  subject = word.toLowerCase().split("").sort();

  return {
    matches: function(list) {
      var sorted_word;
      var anagrams = [];
      // this for loop appears to be like a 'while' loop
      for (var argument_index = 0; argument_index < arguments.length; argument_index++){

        list = arguments[argument_index];

        if (typeof list == 'string') {
         list = [list];
        }
    
        for (var y = 0; y < list.length; y++ ){
          sorted_word = list[y].toLowerCase().split("").sort();
            if (subject.toLowerCase() === list[y].toLowerCase()){
              // Do i have to return something in Javascript if a conditional evaluates to true? I don't actually want anything to happen.
            return [];
            }
            // is it kosher to use 'else ifs' in Javascript?
          if (equals(sorted_word,subject)) {
            anagrams.unshift(list[y]);
          };
        }
      }
      return anagrams;
    }
  };
}

// I failed to install node properly, and do not feel it would be prudent to spend any more time seeking to fix it tonight. I do not know syntax and structure for the language, and thus likely have many errors. 

function anagram( match ){

  var _match = anagramSubject( match )

  return { matches: matches }

  function matches(arr) {
    arr = ( (arr instanceof Array) ? arr : _toArray(arguments) )
    return arr.map( toSubject )
              .filter( uniq )
              .filter( isMatch )
              .map( fromSubject )
  }

  // helpers
  function uniq( word )         { return !_match.sameWord( word ) }
  function isMatch( word )      { return _match.isMatch( word ) }
  function toSubject( word )    { return anagramSubject( word ) }
  function fromSubject( word )  { return word.original() }
}

module.exports = anagram


function anagramSubject( word ){

  return {
    fingerprint: canonicalize( word ),

    lowerCased: word.toLowerCase(),

    isMatch: function( otherWord ){
      return this.fingerprint === otherWord.fingerprint
    },

    original: function(){ return word },

    sameWord: function( otherWord ){
      return this.lowerCased === otherWord.lowerCased
    }
  }

  function canonicalize( str ){
    return str.toLowerCase().split('').sort().join('')
  }
}

function _toArray(args){
  return Array.prototype.slice.call(args)
}


