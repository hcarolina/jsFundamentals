// Ternary are basically acts as a shortcut for writing if & if/else statements

let num =  6;

//Ternary
(num > 0) ? console.log('yes') : console.log('no');

// Instead of 
if (num > 0)
{
    console.log('yes');
}
else
{
    console.log('no');
}

// conditional with if & else if
if (num > 10)
{
    console.log('a first statement');
}
else if (num < 0)
{
    console.log("another statement")
}
else
{
    console.log('yet another, man');
}

(num > 10) ? console.log('a first statement') : (num < 0) ? console.log('another statement') : console.log('yet another, man');

let age = 25;

(age <= 17) ? console.log("You're too young to do anything") : (age >= 18 && age <= 20) ? console.log("Yay! You can vote") : (age >= 21 && age < 25) ? console.log("Yay! You can drink!") : console.log("You can rent a car!");
