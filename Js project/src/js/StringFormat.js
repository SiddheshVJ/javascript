//  String formatting methods

/*
const str = 'Welcome';

console.log(str.charAt(15)) // won't return anything  return type void type
console.log(str.charAt(5)) // return m

console.log(str.charCodeAt(5)) // ASCII value of m = 109

console.log(str.indexOf('e')) //  returns first occurrence i.e. 1
console.log(str.lastIndexOf('e')) //  returns last occurrence i.e. 6
console.log(str.indexOf('b')) //  returns -1


//  slice
var str = 'Siddhesh V jadhav'
console.log(str.slice(7))  // start index

//substr
var str = 'Siddhesh V jadhav'

console.log(str.substr(7))  // read from 7 to end
console.log(str.substr(7, 6))  // read from 7 and 5 characters
console.log(str.substr(7,0))  // cant read anything


var str = 'siddheshvjadhav@gmail.com'

var email = str.substring(str.indexOf('@'), 0)
var domainName = str.substring(str.indexOf('.')+1)

console.log(email)
console.log(domainName)


var str = "Samsung TV-46000.44,Nike Casuals-5000.44"


var [tv, shoe] = str.split(',')
console.log(tv)
var [names, price] = shoe.split(" ")

console.log(names)
console.log(price)


// trim

var str = " siddhesh jadhav "
console.log(str)  // with spaces

var str1 = str.trim()
console.log(str1) // without spaces

*/

var color = 'Redcolor and colour'

var pres = color.match(/ /) // returns array

console.log(pres)


