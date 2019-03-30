// My first connsole statement
console.log("My name is Halimah")

//My first function
function myName() {
    return "My name is Halimah."
}

//My function parameter
function userName(name) {
    return "My name is " + name +"."
}

//An addiion function
function addNum() {
    var a = 5;
    var b = 4;
    return a+b
}
function addNum(5,4) {
    return a+b
}

//If..else function
function greaterThan(x,y) {
    if(x>y) {
        return "x is greater than y"
    } else {
        return "y is greater than x"
    }
}
function greaterThan(x,y) {
    if(x>y) {
        return "x is greater than y"
    } else if (y>x) {
        return "y is greater than x"
    }
    else if (x===y) {
        return "x is equal than y"
    }
    else {
        return "No comparison"
    }
}    
var a = 5;
//single equalsto assigns values, x = 5. Value of x is 5
// double equalsto equates values, 5 =="5". Returns true
// triple equalsto assigns values and types, 5===5 returns true but 5==="5" returns false
