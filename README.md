## Roman Numeral Calculator Kata
##### *see original specification [here](http://codingdojo.org/kata/RomanCalculator/)*

#### Description
> “As a Roman Bookkeeper I want to add Roman numbers because doing it manually is too tedious.” 

Given the Roman numerals, (IVXLCDM which means one, five, ten, fifty, hundred, fivehundred and a thousand respectively), create two numbers and add them. As we are in Rome there is no such thing as decimals or int, we need to do this with the strings. An example would be “XIV” + “LX” = “LXXIV”

There are some rules to a Roman number:

*   Numerals can be concatenated to form a larger numeral (“XX” + “II” = “XXII”)
*   If a lesser numeral is put before a bigger it means subtraction of the lesser from the bigger (“IV” means four, “CM” means ninehundred)
*   If the numeral is I, X or C you can’t have more than three (“II” + “II” = “IV”)
*   If the numeral is V, L or D you can’t have more than one (“D” + “D” = “M”)