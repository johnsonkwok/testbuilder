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
 
  // My outline
  // input: a credit card number as a STRING
  // output: name of the network as a string
  // assumptions: the card number given will always be a string
  // create an output variable (network) that is a string set to 'Invalid Number'
  // create length variable for length of cardNumber
  // get the prefix of the card number as a string
  // if the prefixes and card number length match the format of a specific network
  	// set output variable (network) to the appropriate network
 	// return network variable

 	let network = 'Invalid Number';
	const prefix1 = parseInt(cardNumber.charAt(0)); 
	const prefix2 = parseInt(cardNumber.slice(0, 2));
	const prefix3 = parseInt(cardNumber.slice(0, 3));
	const prefix4 = parseInt(cardNumber.slice(0, 4));
 	const length = cardNumber.length;
 	if ((prefix2 === 38 || prefix2 === 39) && length === 14) {
 		network = `Diner's Club`;
 	} else if ((prefix2 === 34 || prefix2 === 37) && length === 15) {
 		network = 'American Express';
 	} else if (prefix2 >= 51 && prefix2 <= 55 && length === 16) {
 		network = 'MasterCard';
 	} else if (prefix1 === 4 && (length === 13 || length === 16 || length === 19)) {
 		network = 'Visa';
 	} else if (isDiscover(prefix2, prefix3, prefix4, length)) {
		network = 'Discover';
	}
 	return network;
};

function isDiscover(pf2, pf3, pf4, length) {
	if (pf2 === 65 || (pf3 >= 644 && pf3 <= 649) || pf4 === 6011) {
		if (length === 16 || length === 19) {
			return true;
		}
	}
	return false;
}

