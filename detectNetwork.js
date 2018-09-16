// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.

  // My outline
  // input: a credit card number as a STRING
  // output: name of the network as a string
  // assumptions: the card number given will always be a string; we only have two networks in this scenario
  // create an output variable (network) that is a string set to 'Invalid Number'
  // get the prefix of the card number as a string
  // if the prefixes and card number length match the format of a specific network
  	// set output variable (network) to the appropriate network
 	// return network variable

 	let network = 'Invalid Number';
 	const prefix = cardNumber.slice(0, 2);
 	if ((prefix === '38' || prefix === '39') && cardNumber.length === 14) {
 		network = `Diner's Club`;
 	} else if ((prefix === '34' || prefix === '37') && cardNumber.length === 15) {
 		network = 'American Express';
 	}
 	return network;
};


