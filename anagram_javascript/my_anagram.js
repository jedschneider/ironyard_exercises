function thing(string){
  this.string = string.toLowerCase();
  this.matches = function(arr){
    returnArr = [];
    for(var arrItem in arr){
      if(this.check(arr[arrItem].toLowerCase())){
        returnArr.push(arr[arrItem]);
      }
    }
    return returnArr;
  };
  this.check = function(match){
    if(this.string === match){
      return false;
    }else{
      return this.string.split('').sort().join('') === match.split('').sort().join('');
    }
  };  
}

var anagram = function(string){
  return new thing(string);
};

module.exports = anagram;
