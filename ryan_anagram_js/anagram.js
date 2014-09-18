module.exports = anagram;

function anagram( word ) {

	var wordLetters = [];
	wordLetters = word.toUpperCase().split("").sort();

	var equals = function (array1, array2) {
       		if (array1.length != array2.length){
    			return false;
    		}
    		for (var i = 0; i < array1.length; i++) {
    			if (array1[i] != array2[i]) {
		            return false;   
       			}           
    		}
    		return true;
    	};

  return {
    matches: function(subjects) {
    	var subjectLetters;
    	var matchedWord = [];
    	var arrayList =[]
    	for (var a = 0; a < arguments.length; a++){
    		testSubject = arguments[a];
    		if (typeof testSubject == 'string') {
    			testSubject = [testSubject];
    		}
    
    		for (var i = 0; i < testSubject.length; i++ ){
    			subjectLetters = testSubject[i].toUpperCase().split("").sort();
       			if (word.toUpperCase() === testSubject[i].toUpperCase()){
    				return [];
    			}
    			if (equals(subjectLetters,wordLetters)) {
    				matchedWord.push(testSubject[i]);
    			};
    		}
 		}
 		return matchedWord;
	}
  };
}
