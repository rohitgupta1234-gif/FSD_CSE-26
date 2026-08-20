let r=function(a,b)
{
    console.log(a+b);
}
r(10,5);

// make a calculator with the help of callback function
function calculator(a, b, operation) {
    return operation(a, b);
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}
function division(a,b){
    return (a/b);
}

console.log("Addition:", calculator(10, 5, addition));
console.log("Subtraction:", calculator(10, 5, subtraction));
console.log("Multiplication:", calculator(10, 5, multiplication));
console.log("Division:",calculator(10,5,division));
