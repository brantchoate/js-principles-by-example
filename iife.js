//IIFE - Immediately Invoked Function Expressions


//treated as function expression - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

var myFunc = function(){
  console.log("all your base"); //logs 'all your base'
}

//treated as function declaration - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

function(){ 
  console.log("all your base"); //throws SyntaxError: unexpected token (
}();