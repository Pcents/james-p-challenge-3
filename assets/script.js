// Assignment Code
var generateBtn = document.querySelector("#generate");
//what i have added up here
var upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseOption = "abcdefghijklmnopqrstuvwxyz"
var addNumbersOptions = "1234567890"
var addSpecialsOptions = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var thePassword = ""

/*THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password*/
function generatePassword (){
  /*WHEN prompted for the length of the password
  THEN I choose a length of at least 8 characters and no more than 128 characters*/
  var passwordLength = parseInt(prompt("How long would you like your password to be? (8-128)")); //collected from user input
  // could not figure out how to get a validation
  // if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128 ) {
    //   text = "Please enter a specified value";
    //   // else { text = "okay"; }
    // }}
    /*WHEN asked for character types to include in the password
    THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters*/
  var upperCase = confirm("Would you like upper case letters in your password?"); //confirm prompt
  var lowerCase = confirm("Would you like lower case letters in your password?"); //confirm prompt
  var addNumbers = confirm("Would you like numbers in your password?"); //confirm prompt
  var addSpecials = confirm("would you like special characters in your password?"); //confirm prompt
  
  console.log (passwordLength, upperCase, lowerCase, addNumbers, addSpecials)
  
  var passwordChar = ""
  if (upperCase == true){
    passwordChar += upperCaseOptions;
  }
  if (lowerCase == true){
    passwordChar += lowerCaseOption;
  }
  if (addNumbers == true){
    passwordChar += addNumbersOptions;
  }
  if (addSpecials == true){
    passwordChar += addSpecialsOptions;
  }
  console.log (passwordChar)
  
  var passwordPile = passwordChar.split("")
  
  console.log (passwordPile)
  
  //use a for loop to generate a password
  //uses the number inputed to determine lenth (for loop?)
  
  for (var i = 0; i < passwordLength; i ++ ){
    thePassword += passwordPile[Math.floor(Math.random() * passwordPile.length)];
  }
  return thePassword;
}

/*WHEN all prompts are answered
THEN a password is generated that matches the selected criteria*/


// Write password to the #password input (?)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (?)
generateBtn.addEventListener("click", writePassword);








/*WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected*/




/*WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */ 