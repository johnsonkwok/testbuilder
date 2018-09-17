// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

var detectNetwork = function(cardNumber) {
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
	const prefix6 = parseInt(cardNumber.slice(0, 6));
 	const length = cardNumber.length;
	if (isChinaUnionPay(prefix3, prefix4, prefix6, length)) {
		network = 'China UnionPay';
	} else if (isSwitch(prefix4, prefix6, length)) {
		network = 'Switch';
	} else if (isMaestro(prefix4, length)) {
		network = 'Maestro';
	} else if (isDiscover(prefix2, prefix3, prefix4, length)) {
		network = 'Discover';
	} else if (prefix2 >= 51 && prefix2 <= 55 && length === 16) {
		network = 'MasterCard';
	} else if ((prefix2 === 34 || prefix2 === 37) && length === 15) {
		network = 'American Express';
	} else if ((prefix2 === 38 || prefix2 === 39) && length === 14) {
 		network = `Diner's Club`;
 	} else if (prefix1 === 4 && (length === 13 || length === 16 || length === 19)) {
 		network = 'Visa';
	}
 	return network;
};

function isChinaUnionPay(pf3, pf4, pf6, length) {
	if ((pf3 >= 624 && pf3 <= 626) || (pf4 >= 6282 && pf4 <= 6288) || (pf6 >= 622126 && pf6 <= 622925)) {
		if (length >= 16 && length <= 19) {
			return true;
		}
	}
	return false;
}

function isSwitch(pf4, pf6, length) {
	const prefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
	const lengths = [16, 18, 19];
	return ((prefixes.includes(pf4) || prefixes.includes(pf6)) && lengths.includes(length));
}

function isMaestro(pf4, length) {
	if (pf4 === 5018 || pf4 === 5020 || pf4 === 5038 || pf4 === 6304) {
		if (length >= 12 && length <= 19) {
			return true;
		}
	}
	return false;
}

function isDiscover(pf2, pf3, pf4, length) {
	if (pf2 === 65 || (pf3 >= 644 && pf3 <= 649) || pf4 === 6011) {
		if (length === 16 || length === 19) {
			return true;
		}
	}
	return false;
}
