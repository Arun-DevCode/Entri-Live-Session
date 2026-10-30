// Named Function

function name(){
    console.log("Working.")
}

// Anonymous Function
const greet = function(){
    console.log("Greeting today")
}

//Arrow function 
const report = ()=>{}

// IIFE - 
(function(a){
    console.log("Hi everyone")
    console.log(a)
})(10)



// High-Order Function
function calculator(){

}

function sum(){
    console.log(10+12)
}

calculator()

sum()