const removeFromArray = function(array, ...moreArgs) {
	for (let i = 0; i < moreArgs.length; i++) {
    let elementToRemove = array.indexOf(moreArgs[i]);
    if (elementToRemove >= 0) {
    	array.splice(elementToRemove, 1);
    }
    
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
