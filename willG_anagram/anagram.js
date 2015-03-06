module.exports = anagram;


function anagram( word ) {
  var myArray = [];
  var lowerCase = word.toLowerCase();
  var split = lowerCase.split("");
  var sorted = split.sort();
  console.log(sorted);
  return {
    matches: function(subjects) {
      console.log(arguments);
      if(typeof subjects === "string") {
        subjects = Array.prototype.slice.call(arguments)
        console.log(subjects);
      };

      for (var i = 0; i < subjects.length; i++) {
        var subLowerCase = subjects[i].toLowerCase();
        var splitSubjects = subLowerCase.split("");
        var sortSubjects = splitSubjects.sort();
        console.log(sortSubjects);

        if(sortSubjects.join("") === sorted.join("") && lowerCase != subLowerCase) {
            console.log(sortSubjects);
            myArray.push(subjects[i]);
        }
      }
      return myArray;
    }
  };
}
