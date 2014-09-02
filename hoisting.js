// Hoisting - Javascript passes the DECLARATION (not the initialization) of a variable to the top of
// a function no matter where it's declared within the scope of that function

var myvar = 'global value'; 
  
(function() { 
  console.log(myvar); // will return 'global value' as expected 
})();

  
(function() { 
  console.log(myvar); // will return 'undefined' even though the initialization happens the next line after 
  var myvar = 'local value'; 
})();
