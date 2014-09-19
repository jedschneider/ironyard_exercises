module.exports = anagram;

function anagram( word ) {
  var anagramArray = [];
  var lettersArray = [];

  var anagramWord = "";
  function wordSep(myWord){
    anagramWord = myWord.toLowerCase().split("").sort();
    return anagramWord;
  };

  wordSep(word);

  return {
    matches: function(testList) {

      if (typeof testList === "string"){
        testList = Array.prototype.slice.call(arguments);
          console.log(testList);
      };

      for (var i = 0; i < testList.length; i++) {
        var lettersList = ((testList[i]).toLowerCase().split("").sort());
        lettersArray.push(lettersList);
        console.log(lettersArray);
      };

      for (var i = 0; i < lettersArray.length; i++) {
        if ( (lettersArray[i]).join("") === (anagramWord).join("")) {
          var currentWord = testList[i];
          console.log(currentWord);
          if (currentWord.toLowerCase() === word.toLowerCase()) {
            console.log("same");
          }else{
            anagramArray.push(testList[i]);
          }
        }else{
          console.log("no match");
        }
      };
      return anagramArray;
    }
  }
};
