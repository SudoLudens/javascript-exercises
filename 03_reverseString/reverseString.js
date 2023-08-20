const reverseString = function(string) { 
    // Declare new array
    let array = [];

    // Loop over each character of string
    // Add each character to a new array
    for (let i = 0; i < string.length; i++) {
      array.unshift(string[i]);
    }
    
    // Return joined array
    return array.join("");

};

// Do not edit below this line
module.exports = reverseString;
