// question 1

var petArrey = ["cat", "cow", "dog"];

// question 2

console.log(petArrey[1]);

//question 3

petArrey.push("sheep");

//question 4

console.log(petArrey.length);

// question 5

var catObject = {
  name: "rosie",
  colour: "black",
  age: 5
};

// question 6

console.log(catObject.age);

// question 7

var catArrey = [
  {
    name: "rosie",
    colour: "black",
    age: 5
  }
];

// question 8

for (var i = 0; i < catArrey.length; i++) {
  console.log(catArrey[i].name);
  console.log(catArrey[i].colour);
  console.log(catArrey[i].age);
}

// question 9

function logToConsole(animal) {
    console.log(animal);
}

// question 10

logToConsole("donkey");
