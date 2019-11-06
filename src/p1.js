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
  