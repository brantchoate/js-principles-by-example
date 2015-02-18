## keyword this

There are five different ways to use this. Recognizing each pattern helps to know what "this" actually refers to. TLDR = 90% of the time, this will refer to the object to the left of the dot where the function was CALLED.

### Pattern 1 - Global Reference
```javascript
console.log(this); // logs window object
```

### Pattern 2 - Free Function Invocation
The key thing to observe is that the function is not attached to an object as a method. It's all by its lonesome.
```javascript
var fn = function() {
  console.log(this);
}
fn(); // logs window object
```

### Pattern 3 - .call() or .apply()
These methods will set "this" to reference the object that is passed in as the argument
```javascript
var obj = {};
var fn = function() {
  console.log(this);
}
fn.call(obj); //logs obj object
```

### Pattern 4 - Method Invocation
```javascript
var obj = {
  mthd : function() {
    console.log(this);
  }
};
obj.mthd(); //logs obj object
```

### Pattern 5 - Construction method
```javascript
var fn = function() {
  console.log(this);
}
var inst = new fn(); // new object