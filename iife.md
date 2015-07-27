# IIFE - Immediately Invoked Function Expressions

It's important to not that these are **function expressions**

# BAD
```javascript
function(){ 
  console.log("all your base"); //throws SyntaxError: Function statements must have a name.
}();
```
This doesn't work because the above is interpreted as a **function declaration**.
The interpreter reads the parentheses in this case as a grouping operator and essentially reads as follows:
```javascript
function(){ 
  console.log("all your base"); //throws SyntaxError: Function statements must have a name.
}

( );
```

# GOOD

```javascript
(function(){ 
  console.log("these way works 1"); //logs 'these way works 1'
}());

(function(){
  console.log("these way works 2"); //logs 'these way works 2'
})();
```

The above works because the extra parentheses act as a way to trick the compiler into interpreting this is a function expression and not a function declaration. Alternatively, you can use the default function expression syntax with an additional set of parentheses following the expression:

```javascript
var expr = function(){
  console.log("the function expression way"): //logs 'the function expression way'
}();
```
