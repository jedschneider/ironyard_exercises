 module.exports = anagram;


function anagram(word){
  var wordToComp = 'x';
  var parsedArray = [];
  var finalArray = [];


  function sepLetters(wd){
    wordToComp = wd.toLocaleLowerCase().split("").sort();
    return wordToComp;
  };


  sepLetters(word);

  return{
    matches: function(wordList){

      if (typeof wordList === "string"){
        console.log("its a string");
        wordList = Array.prototype.slice.call(arguments);

          console.log(wordList);
      };
      for (var i = 0; i < wordList.length; i++) {
        var addToArray = ((wordList[i]).toLocaleLowerCase().split("").sort());
        parsedArray.push(addToArray);

      };

      for (var i = 0; i < parsedArray.length; i++) {
        if( (parsedArray[i]).join("") === (wordToComp).join("") ){
          var currentListItem = wordList[i];

          if(word.toLocaleLowerCase() === currentListItem.toLocaleLowerCase()){
            console.log("same word");
          }else{
          finalArray.push(wordList[i]);
          }

        }else{
          console.log(parsedArray[i] + " does not match " + wordToComp);

        }

      };
      console.log(finalArray);
      return finalArray;
    }
  }
};
