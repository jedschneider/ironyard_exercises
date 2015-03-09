var _ = require('./underscore.js');

var testing = function(child, parent){
  for(var childIndex in child){
    if(_.include(parent,child[childIndex])){parent.splice(_.indexOf(parent, child[childIndex]), 1);}
    else{return false;}
  }
  return true;
};


// Checks if subset works
child = [1];
parent = [1,2];
console.log(testing(child, parent));

// Checks if subset doesn't pass positive with wrong number
child = [3];
parent = [1,2];
console.log(testing(child, parent));

// Checks if subset doesn't pass positive with same numbers
child = [1,1,1];
parent = [1,2];
console.log(testing(child, parent));

