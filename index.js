function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function increment(n){
    return n + 1;
}
console.log(increment(5));


function decrement(n){
    return n - 1;
}
console.log(decrement(5));




function makeInt(string){
    return parseInt(string, "10");
}
console.log(makeInt(103.20));

function preserveDecimal(string){
    return parseFloat(string);
}
console.log(preserveDecimal(103.555))



function divide(a,b){
    return a / b;
}
console.log(divide(1000000, 2.5));