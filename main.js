//Exercise One
console.log("Exercise One");

function addNumbers(numberA, numberB) {
  var sum = numberA + numberB;
  console.log(numberA + numberB);
  return sum;
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo) // 4

function addNumbers(numberA, numberB) {
  return numberA + numberB;
}

var threePlusTwo = addNumbers(3, 2)

console.log(threePlusTwo) // 5

//Exercise Two
console.log("Exercise Two");

var exclamation = "you've got to be kidding me";

function yell(exclamation){
  return exclamation.toUpperCase() + " ";
}

console.log(yell(exclamation));

function yell10(exclamation){
  return yell(exclamation).repeat(10);
}

console.log(yell10(exclamation));

////////////////////Fun with Exercise Two //////////////////////
var exclamation = prompt("Please enter your own exclamation.");
var exponent = prompt("Please rate your level of excitement on a scale of 1 to 100.");

function yellIt(exclamation, exponent){
  return (exclamation.toUpperCase() + "! ").repeat(exponent);
}

if(exclamation != "" && exclamation != null && exponent != "" && exponent != null){
  if(exponent <= 0){
    console.log("Dude. Learn to follow directions and possibly seek some excitement in your life.")
  }
  else if(exponent <= 100){
    console.log(yellIt(exclamation, exponent));
  }
  else if(exponent > 100){
    console.log("You should really calm down. Maybe try deep breathing or counting to 10.")
  }
}
else{
  console.log("You've got to enter to play.")
}


//Exercise Three
console.log("Exercise Three");

var naughtyList = prompt("Have you done anything naughty this year? Please list your offenses separated by commas.")
var niceList = prompt("Have you done anything nice this year? Please list your good deeds separated by commas.")

function stringToArray(strings){
  var arrayOfStrings = strings.split(",");
  return arrayOfStrings;
}

if(naughtyList != null){
  naughtyArray = stringToArray(naughtyList);
}
else{
  console.log("Refusing to acknowledge your faults will get you nowhere with Santa.")
}

if(niceList != null){
  niceArray = stringToArray(niceList);
}
else{
  console.log("Santa is not impressed by false modesty.");
}


function longest(naughtyArray, niceArray){
  if(naughtyArray.length > niceArray.length){
    var message = "Santa says you have not been very nice and should minimize your expectations for Christmas morning."
    return message;
  }
  else if(niceArray.length > naughtyArray.length){
    var message = "Santa says Christmas should be very merry for you this year! Though of course, virtue is its own reward."
    return message;
  }
  else{
    var message = "Hmmm -- remember, you might fool the console, but Santa knows . . ."
    return message;
  }
}

if(naughtyList != null && niceList != null){
  console.log(longest(naughtyArray, niceArray));
}



//Exercise Four
console.log("Exercise Four");

var character = prompt("Please enter a vowel.");
var isY = false;

function isVowel(character){
  var vowelTrue = false;
  character.ToLowerCase;

  if(character === "a" || character === "e" || character === "i" || character === "o" || character === "u"){
     vowelTrue = true;
  }
  else if(character === "y"){
    isY = true;
  }

  return vowelTrue;
}

if(character != null){
  if(isVowel(character)){
    console.log("Yep. That's a vowel. Well played.")
  }
  else if(isY){
    console.log("Ah, very tricky. According to the Oxford dictionary the letter Y can be regarded as both a vowel and a consonant. Clever.")
  }
  else{
    console.log("Well, no. Try again, dumb dumb.")
    character = prompt("Please enter a vowel.");

    if(isVowel(character)){
      console.log("You got it! Sorry for calling you dumb dumb.")
    }
    else if(isY){
      console.log("That's better! According to the Oxford dictionary the letter Y can be regarded as both a vowel and a consonant. Clever.")
    }
    else{
      console.log("Um, never mind.")
    }
  }
}
