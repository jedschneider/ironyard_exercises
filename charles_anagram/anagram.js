module.exports = anagram;

function anagram(str) {

        var myArray = [];

        //////lower cases all letters in string, splits them then orders them alphabetically
        var lowerCase = str.toLowerCase();
        var sortedStr = lowerCase.split("").sort();

        return {
            matches: function(subjects) {

        ////////if string, returns to new array
              if(typeof subjects === "string") {
                subjects = Array.prototype.slice();
            }

        ////////takes all strings, lower cases all letters, splits then orders them alphabetically
              for (var i = 0; i < subjects.length; i++) {
                var subLowerCase = subjects[i].toLowerCase();
                var sortedSub = subLowerCase.split("").sort();
                
                if(sortedStr.join("") === sortedSub.join("") && lowerCase != subLowerCase) {
                    myArray.push(subjects[i]);
                }
              }
              return myArray;
    }
  }
}
