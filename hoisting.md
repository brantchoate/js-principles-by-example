# Hoisting

Javascript passes the DECLARATION (not the ASSIGNMENT) of a variable to the top of
a function no matter where it's declared within the scope of that function

```javascript
var myvar = 'global value'; 
  
(function() { 
  console.log(myvar); // will return 'global value' as expected 
})();

(function() { 
  console.log(myvar); //this returns undefined because of the assignment below
  var myvar = 'local value';
})();
```
In essence, the second code block really reads as follows

```javascript
var myvar = 'global value'; 

(function() { 
  var myvar; //this "invisible declaration" is hoisted to the top of the function, wiping out the global var
  console.log(myvar); //this returns undefined because of the assignment below
  myvar = 'local value';
})();
