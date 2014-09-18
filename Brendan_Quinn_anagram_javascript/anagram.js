module.exports = anagram;

function anagram( word ) {

    var wordLength = word.length;
    var base = word.split("");

    return {
        matches: function ( subjects ) {

            var newArr = []
            if(arguments.length > 1) {
                for (var prop in arguments) {
                    newArr.push(arguments[prop]);
                }
                subjects = newArr;
            }
            var correct = [];
            var model = base;

            for (var i = 0; i < subjects.length; i++) {
                var checkWordResponse = checkWord(subjects[i], model);

                if (checkWordResponse.work === "yes") {
                    model = checkWordResponse.reset;
                    correct.push(subjects[i]);
                }
                else {
                    model = checkWordResponse.reset;
                }
                model = checkWordResponse.reset;
            }
            return correct;
        }
    };
};

/* checkWord takes a word and filters those whose length is correct to those who is not.  Acceptable lengths are checked by the letter through a callback
 /////////////////////////////////////////////////////// */

var checkWord = function (testWord, wordArray) {
    var pieces = [];
    var letters = testWord.split("");
    var lastIndex = letters.length - 1;

    if (letters.length !== wordArray.length) {
        return {work: "no", reset: wordArray};
    }
    for(var j = 0; j < letters.length; j++) {

        //Took out toLowerCase();
        var checkLetterResponse = checkLetter(letters[j], wordArray);

        if (checkLetterResponse.work === "yes" && j === lastIndex) {
            wordArray = remake(wordArray, pieces);
            return {work: "yes", reset: wordArray};
        }
        else if (checkLetterResponse.work === "no") {
            wordArray = remake(wordArray, pieces);
            return {work: "no", reset: wordArray};
        }
        else {
            pieces.push(wordArray.splice(checkLetterResponse.index, 1));
        }
    }
};

/* checkLetter takes a letter compares it to all letter in the master word. if any match, is sends a yes response and tells check word to splice that index
 /////////////////////////////////////////////////////// */

var checkLetter = function (letter, word) {

    for (var k = 0; k < word.length; k++) {

        if (/[A-Z]/.test( word[0])) {
            word[k].toString().toLowerCase();
            letter.toLowerCase();
            if (letter.toString().toLowerCase() === word[k].toString().toLowerCase()) {
                return {work: "yes", index: k};
            }
        }
        if (letter.toString() === word[k].toString()) {
            return {work: "yes", index: k};
        }
    }
    return {work: "no", index: null};

};
var remake = function (oldArr, piecesArr) {

    for(var w = 0; w < oldArr.length; w++) {
        piecesArr.push(oldArr[w]);
    }
    return piecesArr;
};