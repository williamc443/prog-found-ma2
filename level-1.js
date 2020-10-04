// Question 1
var dogFace = "bulldog";

console.log(dogFace);

// Question 2
var person = {
    name: "William",
    age: 34,
  };

// Question 3

var outOfStock = false;

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

// Question 4

var numberArrey = [5, 8, 9, 11, 20];

for (var i = 0; i < numberArrey.length; i++) {
    console.log(numberArrey[i])
  }

// Question 5

for(var count = 15; count <= 25; count++) {
  console.log(count);
}
// or this

for (var i = 15; i <= 25; i++) {
  console.log(i)
}

// Question 6

for(var count = 15; count <= 25; count++) {
  if(count === 20) {
    console.log(count);
}
}
// or this

for (var i = 15; i <= 25; i++) {
  if(i === 20) {
    console.log(i);
}
}
// Question 7


var member = [
  {
    name: "Benji", 
    age: 3,
    VIP: true
  },
  {
    name: "Emanuel", 
    age: 0,
    VIP: true
  }
];

for(var i = 0; i < member.length; i++) {
  console.log(member[i].age);
  console.log(member[i].VIP);
}

// Question 8

function whatIDontLike(noun){
console.log("I don't like " + noun);
}

whatIDontLike("cold");

// Question 9

function basketOfBals(basket1, basket2) {
  var sum = basket1 - basket2;
  console.log(sum);
}
basketOfBals(10, 5);


// Question 10

var messenger = [];
function carrier(bird) {
    var type = bird;
    messenger.push(bird);
    console.log(messenger.length)
    console.log(messenger)
}
carrier("pigeon");
