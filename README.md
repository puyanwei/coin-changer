# Coin Changer Kata

### Overview

If you need change, this coin changer will make sure you get the most efficient set of coins. For instance, if you need 89 cents, then this coin changer will give you 3 quarters, 1 dime and 4 pennies or "QQQDPPPP".

This was written to practice TDD.

An alternative version is on 'array-coin-changer' branch. This is where the input will return an array of the coins needed to give the correct change.

### Plan

I want to breakdown this kata into smaller more manageable pieces.

1.  Divides the number into quarters, with a remainder. Output number of quarters and its remainder.
2.  Do the same for dimes, and pennies.
3.  Output coins into a string with Q, D or P.
