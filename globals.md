# Global Variables
This example is to illustrate:
1. the different ways to call globals,
2. the ways in which globals can be inadvertantly created

## how to access global variables

```javascript
globalvar = "heyimaglobal";
console.log(globalvar); // 'heyimaglobal'
console.log(window.globalvar); // 'heyimaglobal'
console.log(window["globalvar"]); // 'heyimaglobal'
console.log(this.globalvar); // 'heyimaglobal'
```

## global anti-patterns (with correct patterns)

### BAD
```javascript
function multiply(x, y) {
	this_is_a_global_result = x * y;
	return this_is_a_global_result;
}

multiply(3,4);

console.log(window.this_is_a_global_result); //what? how'd result get into the global scope??
```

### GOOD

```javascript
function multiply(x, y) {
	var not_a_global_result = x * y; //notice that 'var' has been added
	return not_a_global_result;
}

multiply(3,4);

console.log(window.not_a_global_result); //undefined - which is good, means that our var didn't leak into global scope
```


### BAD

```javascript
function example() {
	var a = b = 9; //right-to-left evaluation makes this as if var a = (b = 0) was written
}

example();

console.log(window.a); // 'undefined'
console.log(window.b); // '9'
```

### GOOD

```javascript
function example() {
	var a, b;
	a = b = 9;
}

example();

console.log(window.a); // 'undefined'
console.log(window.b); // 'undefined'
```
