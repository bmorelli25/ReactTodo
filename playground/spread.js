// function add (a,b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
// console.log(add(...toAdd));

// var groupA = ['Allie', 'Brandon'];
// var groupB = ['Dillin'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var person2 = ['Joe', 50];

//Hi Andrew, you are 25
function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
};
greet(...person);

var names = ['Allie', 'Mary Lynn'];
var final = ['Brandon', ...names];
// Hi _

final.forEach(function(name) {
  console.log("Hi " + name);
});
