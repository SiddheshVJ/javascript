// Meta characters

/*

? = zero or one occurrence of any character

colou?r => color, colour

+ = one or more occurrence of character
colou+r => colouuur, colour

* = zero or more occurrence of character
colou*r = colour, color, colouuur

. = any single character
.at => cat,bat,1at,$at
.o. => boy, cow,toy, dos,1o$

\ = it changes meta character into normal character or vice versa

gmail\.com => it will recognize  . as normal character

| = OR, allows multiple choices
| => red | green | blue

\^ = expression starts with 

$ = expression end with

=> \^......$

\d = it allows only single digit number
=> 1,4,2,5,4
\d?\d = 1,54,65,4

\D = allows non numeric values alike alphabets, special characters

\w = it allows word chars like [A-Z,a-z,0-9,_]

\W = it allows non-word chars, only special characters

\s = it refers one blank space


code to match "+91 and 10 digit numbers"
var digit = " +919834785529"

var g = digit.match(/\+91\d{10}/)

console.log(g)

*/


