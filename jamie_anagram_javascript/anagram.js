module.exports = anagram 


function anagram(word){
  // console.log(word)

  splitAndSort = function(element) {
      // console.log(element)
      // console.log(word)
      // console.log(element.split("").sort())
      // console.log(word.split("").sort())
      return element.toLowerCase().split("").sort().join("") == word.toLowerCase().split("").sort().join("") && element.toLowerCase() != word.toLowerCase()
      
    };

  return {

    // matches: function (subjects) {
    //   // console.log(word)
    //   if (typeof subjects === 'object') {
    //     var output = subjects.filter(splitAndSort);
    //     // console.log(output)
    //     return output
    //   }
    //   else {
    //     var output = []
    //     console.log(subjects)
    //     if (splitAndSort(subjects)) {
    //       output.push(subjects) 
    //     };
    //     return output
    //   };

    // }
    
    matches: function () {
      // console.log(word)
      if(arguments.length > 1) {
        var output = [];
        var args = Array.prototype.slice.call(arguments);
        output = args.filter(splitAndSort);
      }   
      else {
        var output = arguments[0].filter(splitAndSort);
        // console.log(output)
      
      }
      return output

    }

  }

};
