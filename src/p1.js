// console.log("Hello");
var x = 4;
var y = 3;
var z = x + y + 7;
function myFunction(x, y) {
    return x * y;
}
var f = myFunction(x, y);
console.log(f);
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.firstName);
  console.log(person.fullName());
  const p = ['ja', 'ty', 'ono'];
  console.log(p[1]);
  console.log(person["firstName"]);
  console.log(person.firstName);
console.log(person.lastName.length);
p.forEach((value, index ) => console.log(value, index))
const p1 = p.map(value => value.length);
console.log(p1);
const p2 = p.filter((value) => value.length < 3);
console.log(p2);
const p3 = p.reduce((total, value ) => total + value.length, 0);
console.log(p3);
