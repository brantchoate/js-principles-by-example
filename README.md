Javascript Code Snippets that illustrate important nuances of JS + also show how to implement common algorithims in JS. This will eventually be more organized.

## keyword this

There are five different ways to use this. Recognizing each pattern helps to know what "this" actually refers to.

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
