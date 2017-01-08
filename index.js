/*
Daefen
------

A library for encoding and decoding large numbers into a pronounceable, high density, string, that uses 3456 syllables as it's base.


*/

// Creates the syllable array
var syllables = [];
var consonants = 'bcdfghjklmnprstvwz'; // consonants except hard to speak ones
var vowels = 'aeiouy'; // vowels

// Vowel + Consonant
for (a = 0; a < vowels.length; a++) {
  for (b = 0; b < consonants.length; b++) {
    syllables.push(vowels[a] + consonants[b] );
  } 
}

// Consonant + Vowel
for (b = 0; b < consonants.length; b++) {
  for (a = 0; a < vowels.length; a++) {
    syllables.push(consonants[b] + vowels[a]);
  } 
}

// Consonant + Vowel + Vowel
for (b = 0; b < consonants.length; b++) {
  for (a = 0; a < vowels.length; a++) {
    for (e = 0; e < vowels.length; e++) {
      syllables.push(consonants[b] + vowels[a] + vowels[e]);
    }  
  } 
}

// Consonant + Vowel + Consonant
for (b = 0; b < consonants.length; b++) {
  for (a = 0; a < vowels.length; a++) {
    for (c = 0; c < consonants.length; c++) {
      syllables.push(consonants[b] + vowels[a] + consonants[c]);
    }  
  } 
}

// Vowel + Consonant + Vowel
for (a = 0; a < vowels.length; a++) {
  for (b = 0; b < consonants.length; b++) {
    for (e = 0; e < vowels.length; e++) {
      syllables.push(vowels[a] + consonants[b] + vowels[e]);
    }  
  } 
}

// Quick function that converst a big Number object into an array of numbers in any base
function fromBase10(bigNum, base) {
  var result = [];
  if (bigNum == 0) return [0];
  for (var i=bigNum; i > 0; i = i.dividedBy(base).floor()){
   result.unshift(i.modulo(base).toFixed());
  };
  return result;
}

// Important to check some spacing issues
function isConsonant(letter) {
  return consonants.indexOf(letter) >= 0;
}

// Converts an integer (passed as a string to avoid scientific notation issues)
function toWords(numberAsString) {
  let bn = new BigNumber(numberAsString.toString());
  let numberArray = fromBase10(bn, syllables.length);
  let result = '';
  let lastWord = '';
  let n = 0;
  for (i = 0; i < numberArray.length; i++) {
    n = numberArray[i] || 0;

    lastWord = result.split(" ").slice(-1)[0];

    if (result == ''  || lastWord.length == syllables[n].length 
      || (lastWord.length < 5 && isConsonant(lastWord.slice(-1)) && isConsonant(syllables[n].slice(0,1))) ) {
      result += syllables[n];
    } else {
      result += " " + syllables[n];
    }
  }
  return result.replace(/\b[a-z]/g,function(f){return f.toUpperCase();});
}

// Converts a valid phrase back into a string
function fromWords(words) {
  let wordArray = words.toLowerCase()
    .replace(/[bcdfghjklmnprstvwz][bcdfghjklmnprstvwz]/gi,function(r){ let n = Math.floor(r.length/2); return r.substr(0,n) + ' ' + r.substr(n,n)})
    .replace(/[a-z]{6}|[a-z]{4}/gi,function(r){ let n = Math.floor(r.length/2); return r.substr(0,n) + ' ' + r.substr(n,n)})
    .split(" ");
  let result = new BigNumber(0);

  for (i = 0; i < wordArray.length; i++) {
    if (syllables.indexOf(wordArray[i]) < 0) return;
    result = result.plus(new BigNumber(syllables.indexOf(wordArray[i])).times(new BigNumber(syllables.length).toPower(wordArray.length - i - 1))) 
  }

  return result.toString(10);
}

var random = Math.floor(Math.random()*Math.pow(3456,5)).toString()
toWords(random)

