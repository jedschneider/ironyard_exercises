
function subset(ar1, ar2, minMatches){
  ar1.concat(ar2).toSource().match(/{(.*?)}/g).forEach(function(str) {
    console.log(str);
  });
}


function subset (ar1, ar2, minMatches) {
  ar1.concat(ar2).toSource().match(/{(.*?)}/g).forEach(function(str) {
    if ( ar1.toSource().includes(str) ) { --minMatches; }
  });
  return minMatches ? false : true;
}