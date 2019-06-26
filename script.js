console.log("hello script js");

//part 1
var inputHappened = function(currentInput){
  console.log( currentInput );
  //display( "WOW SOMETHING HAPPENED" );
  var input = parseInt(currentInput); //change input from a string to a number
  var FtoC = (input - 32) * (5/9); //calculate degrees F to degrees C
  console.log(FtoC + " degrees C");

  var FtoK = (((input - 32) * (5/9)) + 273.15); //calculate degrees F to Kelvin
  console.log(FtoK + " Kelvin");
  var output = FtoC + " degrees Celsius or " + FtoK + " Kelvin";

  display(output);
};

/*var inputValid = function( currentInput ){

  var parsedInput = parseInt( currentInput );

  if( isNaN( parseInput ) ){
    return false
  }else{
    return true;
  }
};

if ()

var inputHappened = function(currentInput){
    console.log( currentInput );
};*/