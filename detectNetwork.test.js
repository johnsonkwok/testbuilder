/*
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org
});
*/

describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    } 
  });
});

describe('American Express', function() {
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    } 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should(); 

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
});

describe('Discover', function() {
  var assert = chai.assert;

  it('has a prefix of 6011 and a length of 16', function() {
    assert(detectNetwork('6011123456789012') === 'Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    assert(detectNetwork('6011123456789012345') === 'Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    assert(detectNetwork('6511123456789012') === 'Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    assert(detectNetwork('6511123456789012345') === 'Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it(`has a prefix of ${prefix} and a length of 16`, function() {
        assert(detectNetwork(`${prefix}1123456789012`) === 'Discover');
      });
      it(`has a prefix of ${prefix} and a length of 19`, function() {
        assert(detectNetwork(`${prefix}1123456789012345`) === 'Discover');
      });
    })(prefix);
  }
});

describe('Maestro', function() {
  let should = chai.should;
  const prefixes = ['5018', '5020', '5038', '6304'];

  for (let length = 12; length <= 19; length++) {
    prefixes.forEach((prefix) => {
        it(`has a prefix of ${prefix} and a length of ${length}`, function() {
          const cardNumber = prefix.padEnd(length, '1234567890');
          detectNetwork(cardNumber).should.equal('Maestro');
        });
    });
  }
});

describe('China UnionPay', function() {
  let should = chai.should;
  
  for (let prefix = 624; prefix <= 626; prefix++) {
    for (let length = 16; length <= 19; length++) {
      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        const cardNumber = prefix.toString().padEnd(length, '1234567890');
        detectNetwork(cardNumber).should.equal('China UnionPay');
      });
    }
  }

  for (let prefix = 6282; prefix <= 6288; prefix++) {
    for (let length = 16; length <= 19; length++) {
      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        const cardNumber = prefix.toString().padEnd(length, '1234567890');
        detectNetwork(cardNumber).should.equal('China UnionPay');
      });
    }
  }

  for (let prefix = 622126; prefix <= 622925; prefix++) {
    for (let length = 16; length <= 19; length++) {
      it(`has a prefix of ${prefix} and a length of ${length}`, function() {
        const cardNumber = prefix.toString().padEnd(length, '1234567890');
        detectNetwork(cardNumber).should.equal('China UnionPay');
      });
    }
  }
});

describe('Switch', function() {
  let should = chai.should;
  const prefixes = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  const lengths = [16, 18, 19];

  for (let i = 0; i < lengths.length; i++) {
    prefixes.forEach((prefix) => {
      it(`has a prefix of ${prefix} and a length of ${lengths[i]}`, function() {
        const cardNumber = prefix.toString().padEnd(lengths[i], '1234567890');
        detectNetwork(cardNumber).should.equal('Switch');
      });
    });
  }
});
