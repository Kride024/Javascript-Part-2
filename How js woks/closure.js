// * Closures: (depends on heap memory)

//? A closure is created when an inner function has access to the variables of its outer function,even after the outer function has finishing executing.

// Example-1:
function outerFunction(){
    var outerVariable="I'm from outer";

  
function innerFunction(){
    console.log(outerVariable);
    }
return innerFunction;
}
var closureFunction=outerFunction();
closureFunction();

// Example-2:
function multiplier(factor){
    return function(number){
        console.log(number,factor);
        return number*factor;
        };
}

const double=multiplier(2);
console.log(double(5));
