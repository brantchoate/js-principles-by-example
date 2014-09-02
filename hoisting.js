var myvar = 'global value'; 
  
(function() { 
  console.log(myvar); // will return 'global value' as expected 
})();

  
(function() { 
  console.log(myvar); // will return 'undefined' even though the initialization happens the next line after 
  var myvar = 'local value'; 
})();