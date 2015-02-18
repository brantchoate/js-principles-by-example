# IIFE - Immediately Invoked Function Expressions

It's important to know the difference between expressions, statements, and declarations in regards to functions before reading this.

# BAD - Doesn't work because it thinks
```javascript
function(){ 
  console.log("all your base"); //throws SyntaxError: Function statements must have a name.
}();
```

While this function declaration is now syntactically valid, it's still
a statement, and the following set of parens is invalid because the
grouping operator needs to contain an expression.

function what(){ 
  console.log("michael bay ruined my childhood"); // SyntaxError: Unexpected token ')'
}(); 


//This will take away the SyntaxError but the function won't execute

function what(){
  console.log("michael bay ruined my childhood");
 }(1);



 //All of the these ways work

(function(){ 
  console.log("these way works 1"); //logs 'these way works 1'
}());

(function(){
  console.log("these way works 2"); //logs 'these way works 2'
})();

// Because the point of the parens is to distinguish between function
// expressions and declarations, if the compiler is already expecting
// an expression, then the parens aren't necessary (convention is to 
// include them anyway)

 
var i = function(){ 
  console.log("these way works 3");
}();

true && function(){ 
  console.log("these way works 4");
}();

0, function(){
  console.log("these way works 5");
  }();