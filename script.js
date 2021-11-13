// Assignment Code
var generateBtn = document.querySelector("#generate");
var length;
var uppers = "ABCDEFGHIJKLMOPQRDTUVWXYZ";
var lowers = "abcdefghijklmnopqrstuvwxyz";
var digits = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9";
var specialChar = "_, !, $, *, ~, /, =, -, ., @";
var chosenChar = ""; 

// Write password to the #password input - 
function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");
  var retValue = "";
 
  passwordText.value = password;
}

for (var i = 0, n = length; i < length; i++) {
  retValue += charset.charAt(Math.floor(Math.random() * n))
}

// Add event listener to generate button - window prompts with criteria
generateBtn.addEventListener("click", function(){
  length = prompt("Choose a password length between 8 and 128 characters.");
});

generateBtn.addEventListener("click", function(){
  uppers = prompt("Would you like upper case letter included in your password?");
});

generateBtn.addEventListener("click", function(){
  lowers = prompt("Would you like lower case letters included in your password?");
});

generateBtn.addEventListener("click", function(){
  digits = prompt("Would you like digits included in your password?");
});

generateBtn.addEventListener("click", function(){
  specialChar = prompt("Would you like special characters included in your password?");
  writePassword();
});


