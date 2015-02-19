# IIFE - Immediately Invoked Function Expressions

# BAD
```javascript
function(){ 
  console.log("all your base"); //throws SyntaxError: Function statements must have a name.
}();
```
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