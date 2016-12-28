// PROTOTYE
function Person(name, age)
{
	this.name = name;
	this.age = age;
}

Person.prototype.sayHello = function(str)
{
	console.log(str);
}

var p = new Person();
p.sayHello("p.sayHello");

// now repalce the Person with Function, we have
Function.prototype.saySomeThing = function(str)
{
	console.log(str);
}

var f1 = new Function('a', 'b', 'console.log("f1 constructor " + a + ", " + b);');
f1.saySomeThing("I am f1");
f1.prototype.instanceSaySomeThing = function(str)
{
	console.log(str);
}

// another way to create a Function instance
function f2()
{
}
f2.saySomeThing("I am f2");
f2.prototype.instanceSaySomeThing = function(str)
{
	console.log(str);
}


// now create an instance of f1, f2
var f1Instance = new f1('arg 1', 2222);
f1Instance.instanceSaySomeThing("f1Instance.instanceSaySomeThing");
var f2Instance = new f2();
f2Instance.instanceSaySomeThing("f2Instance.instanceSaySomeThing");

// create a construct method to get an array object of arguments
// in steak of passing a list of arguments into constructor

Function.prototype.construct = function(args)
{
	console.log("construct function : this.fid " + this.fid);
  var oNew = Object.create(this.prototype);
  this.apply(oNew, args);
  return oNew;
};

function f3(name, age)
{
	console.log("my name is " + name + ", age " + age);
};
f3.fid = "f3";

/*NOTE:
+ Function is Class
function f3(name, age) or
var f3 = new Function('name', 'age', 'console.log("my name is " + name + ", age " + age);');
+ f3 is an instance of class Function
+ Function.prototype.construct = function(args){...} => construct is an METHOD of f3
																								=> inside f3.construct, 'this' is referece to f3 instance
																								=> using Function.prototype.someMethod to getback the function definition reference by 'this'
*/
var hailua = f3.construct(["hailua", 35]);

var end = true;
