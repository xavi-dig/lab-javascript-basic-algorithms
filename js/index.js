console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "Xavi";
console.log(`The driver name is ${hacker1}`);

const hacker2 = "Xavi";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1 > hacker2) {
  console.log(
    `he driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1 < hacker2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let nameDriverSpace = "";
for (let i = 0; i < hacker1.length; i++) {
  nameDriverSpace += hacker1[i].toUpperCase() + " ";
}
console.log(nameDriverSpace);

let nameNavigatorReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  nameNavigatorReverse += hacker2[i];
}
console.log(nameNavigatorReverse);

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let words = 0;
let etNumbers = 0;

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante dolor, mollis eget vehicula vitae, dignissim vel justo. Ut luctus posuere quam, eu accumsan lacus sollicitudin at. Pellentesque sollicitudin elementum massa consectetur tempor. Mauris convallis libero risus, nec scelerisque ante lobortis at. Sed auctor augue nec sapien tempor dapibus. Duis et condimentum ante. Donec elementum mauris quis faucibus sagittis. Aliquam semper nulla quis purus euismod semper. Praesent eget mattis tortor, ut convallis quam. Nulla cursus dignissim quam at semper. Curabitur blandit porta sem et sodales. Maecenas quis semper libero. Praesent eu luctus purus. Curabitur imperdiet vestibulum nulla quis porta. Phasellus sit amet nulla neque. Phasellus ullamcorper est sed turpis vulputate, quis lacinia ex scelerisque. Morbi at ipsum risus. Sed id tellus sit amet justo feugiat pellentesque sed ut est.";

let wordsInParagraph = lorem.split(" ");

for (let i = 0; i < wordsInParagraph.length; i++) {
  if (wordsInParagraph[i].includes("\n")) {
    words++;
  } else if (wordsInParagraph[i] === "et") {
    etNumbers++;
  }
  words++;
}

console.log(`words = ${words}`);
console.log(`et numbers = ${etNumbers}`);
