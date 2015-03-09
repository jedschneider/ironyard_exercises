var _ = require('./underscore.js');

// accepts a child array and parent array
function isSubset(child, parent){
  // loops through child array
  for(var childIndex in child){
    console.log(parent[0]);console.log(child[childIndex]);
    console.log(_.include(parent,child[childIndex]));
    // checks if child instance exists in parent array and removes from parent
    if(_.include(parent,child[childIndex])){parent.splice(_.indexOf(parent, child[childIndex]), 1);}
    else{return false;}
  }
  return true;
}

module.exports = isSubset;