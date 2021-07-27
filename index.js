//Time Limit 45 minutes
// Write a function toggleCase which takes in a string and returns a new string where all the lowercase 
// letters are changed to uppercase and all the uppercase letters are changed to lowercase.

// toggleCase('MaRio'); //'mArIO'
// toggleCase('PRP'); //'prp'
// toggleCase('Good news, everyone!'); //'gOOD NEWS, EVERYONE!'

function toggleCase(str) {
  // create a result string
  var toggled = '';
  // iterate through the input string
  for (var i = 0; i < str.length; i++) {
  // check if the character is uppercase or lowercase
    if (str[i] === str[i].toLowerCase()) {
      // add the opposite to the result string
      toggled += str[i].toUpperCase();
    } else {
      // add the opposite to the result string
      toggled += str[i].toLowerCase();
    }
  }
  // return result string
  return toggled;
}
// toggleCase('PRP'); //'prp'
// toggleCase('MaRio'); //'mArIO'
// toggleCase('Good news, everyone!'); //'gOOD NEWS, EVERYONE!'

function assertEquals(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed') 
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual) 
  }
}

assertEquals(toggleCase('Good news, everyone!'), 'gOOD NEWS, EVERYONE!', 'Should return a string with the opposite casing of each character')

assertEquals(toggleCase('PRP'), 'prp', 'Should return a string with the opposite casing of each character')

assertEquals(toggleCase('MaRio'), 'mArIO', 'Should return a string with the opposite casing of each character')

// Question.. = Why does my function return correctly if there are numbers in the string?  How does Javascript recognize if a number is uppercase or lowercase?

