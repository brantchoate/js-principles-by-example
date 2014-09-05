//how to access globals

globalvar = "evil";
console.log(globalvar); // 'evil'
console.log(window.globalvar); // 'evil'
console.log(window["globalvar"]); // 'evil'
console.log(this.globalvar); // 'evil'


//implied global example #1


//the wrong way

function multiply(x, y) {
	this_is_a_global_result = x * y;
	return this_is_a_global_result;
}

multiply(3,4);

console.log(window.this_is_a_global_result); //what? how'd result get into the global scope??

//the right way

function multiply(x, y) {
	var not_a_global_result = x * y; //notice that 'var' has been added
	return not_a_global_result;
}

multiply(3,4);

console.log(window.not_a_global_result); //undefined


//implied global example #2


//the wrong way

function example() {
	var a = b = 9; //right-to-left evaluation makes this as if var a = (b = 0) was written
}

example();

console.log(window.a); // 'undefined'
console.log(window.b); // '9'

//the right way

function example() {
	var a, b;
	a = b = 9;
}

example();

console.log(window.a); // 'undefined'
console.log(window.b); // 'undefined'