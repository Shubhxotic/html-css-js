//use const for everything.
class Parent{
	constructor(){
		let age=12;
	}

	 foo(){
		console.log('foo');
	}
	 bar(){
console.log('bar');
	}
}
const parent=new Parent();
class Child extends Parent{
	constructor()
	{
		super()
	}
	baz(){
		console.log('baz');
	}
}
const child=new Child();
console.log(child.baz);
child.bar();
child.baz();
console.log(parent.age);

var x=function (a,b) {
	// body...
	return a+b;
}

var y=(a,b) => {
	return a+b;
}

console.log(x(12,213));
console.log(y(23,123));

console.log([0,1,2].map(val => val++));

//do.something((a,b)=>a+b);
