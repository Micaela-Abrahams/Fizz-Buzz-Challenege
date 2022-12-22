// The purpose of this challenge is to create an loop that prints out numbers from 1 - 100.
// If number is a multiple of 3 - print "Fizz"
// If number is a multiple of 5 - print "Buzz"
// If number is a multiple of 3 & 5 - print  "Fizz Buzz"

// We will be using the For Loop method for this challenge
// After the Conditional has been set, we will have 3 if statements.
for (var i = 1; i <= 100; i++){
    // If number is a multiple of 3 - print "Fizz"
    if((i % 3) == 0){
        console.log("Fizz" + " ");

    }  // If number is a multiple of 5 - print "Buzz"
    elseif((i % 5) == 0);{
        console.log("Buzz")
    } // If number is a multiple of 3 & 5 - print  "Fizz Buzz"
    elseif((i % 3) == 0) && ((i % 5) == 0);{
        console.log("Fizz Buzz")
    } else(){
        console.log(i)
    }
}

   
