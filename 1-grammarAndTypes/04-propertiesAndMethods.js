/* 
    PROPERTIES AND METHODS

        -In most cases, properties area qualities related to the data we're working with, and methods are actions we can preform
         on the data we're working with. Using a method causes something to happen to the data, while using a property 
         returns information about the data

         -.property and .methods()
            -methods have parenthesis behind them, properities don't
*/   

// STRING PROPERTIES

// Length
let myName = 'Carolina';
console.log(myName.length);

// STRING METHODS

let myDogsName= 'Tardis';
console.log(myDogsName.toUpperCase()); // change a string to uppercase

let home = 'My home is Carmel';
console.log(home.includes('Carmel'));

// challenge: use google, find MDN documentation for string methods. Research the string '.split()' method, and use the implement it to get an array back from a string. 

let sent = 'This sentence will be split into individual parts';

console.log(sent.split(''));  // split at each individual character
console.log(sent.split(' ')); // split at each space in the original string
console.log(sent.split(',')); // split at a comma 