// The purpose of this challenge is to create an loop that prints out numbers from 1 - 100.
// If number is a multiple of 3 - print "Fizz"
// If number is a multiple of 5 - print "Buzz"
// If number is a multiple of 3 & 5 - print  "Fizz Buzz"

// We will be using the For Loop method for this challenge
// After the Conditional has been set, we will have 3 if statements.

// Step 1 - Create a Loop (For Loop)
// Step 2 - We need something to output the Loop [Console.log()]
// Step 3 - We want to print out the words "Fizz", "Buzz" & "FizzBuzz", therefore we use an If statement
for(var i = 1; i <= 100; i++){

    if((i % 3 == 0) && (i % 5 == 0)){

        console.log("FizzBuzz");

     } else if(i % 3 == 0){

    console.log("Fizz");

    } else if (i % 5 == 0){

    console.log("Buzz");

    } else{
        console.log(i);
    }

}

// The above code reads as follows:
/* A For Loop has been created where i have been declared with a value of 1,
i should be less than or equal to 100, and
i should be incremented by 1*/

/*Create an If statement & first check to see if i is a multiple of 3 & 5 & output, by doing this first 
it's easier to then do the elseif & else statement*/

/*If  i divided by 3 is equal to 0 & If  i divided by 5 is equal to 0 ouput = "Fizz Buzz"*/
// Else if i divided by 3 is equal to 0 output = "Fizz"
//  Else if i divided by 5 is equal to 0 ouput ="Buzz"
// If i is not a multiple of 3 &/or 5 output = i (a number that is not a multiple of 3 &/or 5 will be displayed)

   
