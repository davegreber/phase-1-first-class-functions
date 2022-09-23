// 1 The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, 
// so long as it calls the callback function


function receivesAFunction(callback) {
    callback()
}

// 2 The returnsANamedFunction function should:
// take no arguments
// return a named function

// function returnsANamedFunction() {
//     fn = returnsANamedFunction
//     return returnsANamedFunction()

function returnsANamedFunction() {
    return function namedFunction() {}
}

// // 3 The returnsAnAnonymousFunction function should:
// // take no arguments
// // return an anonymous function

function returnsAnAnonymousFunction() {
    return function () {console.log("hello")}
}