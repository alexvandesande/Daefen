Daefen
------

A library for encoding and decoding large numbers into a pronounceable, high density, string. The library converts any number into a base 3456 and then replaces each of these by a syllable. There is then a basic logic into joining some syllables as full words.  

This is intended to build mnemonic seed phrases for private keys. This library doesn't handle creation of random digits, just converts it to and from the words. The rationale being that when users are creating "mnemonic" phrases, often the goal is not actually memorize them, but instead just to be able to jot them down in a piece of paper. The pseudowords generated here are easier to write down are less than half the size of actual english words. The words do not sound like any particular language, rather sound like an arcane magical script or a sci-fi alien language.

### Examples

This has the bits equivalent of a 12 word seed phrase:
*Icuzgak Raowah Kavnik Evmub Usalon*

#### More examples:

0xdc9974d8d61ebb673b1d132e0b767f4e38fba057 : "Dy Lokgym Panviz Ymyvoy Jycbiz Campue Gubcil Ogo"

64244571162838560 : Joadyl Meczak Hib

393417545048166200 : Zofwus Kubzoj Wyi

510000000000000 : Afnik Paa Ydjej (Amount of squared meters on earth, great for a map naming scheme)

1000000 : Daefen 

3454 : Yzu

3455 : Yzy

3456 : Acab

3457 : Acac

1 : Ac

0 : Ab