module.exports = anagram;

function anagram(word) {

	var anagrams = [];

	var chars = word.toLowerCase().split("").sort();

	return {
		matches: function(wordList) {

			if (typeof wordList === "string") {
				wordList = Array.prototype.slice();
			}

			for (var i = 0; i < wordList.length; i++) {
				var currentWord = wordList[i];
				var eachWord = currentWord.toLowerCase().split("").sort();

				if (word.toLowerCase() === currentWord.toLowerCase()) {
					console.log("the same word");
				} else if (chars.join("") === eachWord.join("")) {
					anagrams.push(wordList[i]);
				}
			}
			return anagrams;
		}
	}
}
