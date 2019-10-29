// LANGUAGE: Javascript
// ENV: Node.js
// AUTHOR: Vani Taneja
// GITHUB: https://github.com/vanitaneja22

var Person = function(name){
  this.name = (name) ? name : "Anyonymous";  
}

Person.prototype.greet = function(name){
  name = (name) ? name : this.name;
  var str = "Hello, World! by " + name;
  console.log(str);
  return str;
}

var obj = new Person('Vani');
obj.greet();