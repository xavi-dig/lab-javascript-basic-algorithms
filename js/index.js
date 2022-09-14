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

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat lorem risus, ac egestas ipsum rhoncus in. Nullam sodales, nunc elementum varius venenatis, eros ipsum lacinia elit, ut sollicitudin ipsum tortor nec lacus. Donec aliquet convallis magna. Nulla eget ante urna. Mauris suscipit, erat vel rhoncus laoreet, turpis velit fringilla diam, vitae egestas justo odio quis ipsum. Nulla a venenatis velit, ac interdum massa. Morbi ac ipsum non odio porta consequat.

Ut ornare, metus non posuere mattis, sem augue blandit enim, et condimentum ligula diam eget eros. Proin ut ullamcorper orci. Vivamus eget sem vel leo malesuada consequat. Quisque hendrerit auctor diam sed malesuada. Nulla vestibulum massa arcu, sed porttitor libero finibus eu. Fusce tristique quam odio, sed convallis libero pretium id. Nulla posuere magna nisl. Donec nec ex a est mattis tempor nec tincidunt elit. Sed elit augue, accumsan sit amet nunc ac, auctor scelerisque mi. In facilisis mauris vitae urna volutpat aliquet. Cras varius lacus id justo elementum, at dictum nisi convallis. Cras tempor non nisl non interdum. Aliquam sed nulla consectetur, condimentum sapien ultricies, consequat enim. Donec eu dapibus mauris, vel tincidunt erat.

Donec laoreet, enim in faucibus finibus, est enim aliquam purus, non sollicitudin arcu velit eu nulla. Aenean consectetur ut arcu at hendrerit. Fusce quis dapibus neque, ac faucibus felis. In cursus orci non auctor eleifend. Donec in ipsum sit amet tellus porta laoreet id ut odio. Nullam in fringilla nunc. Quisque ut mi orci. Nullam est nisi, fermentum eu iaculis sit amet, hendrerit vulputate augue. Phasellus finibus nibh ut nisl vehicula tristique. Aenean nibh risus, scelerisque in justo eu, eleifend bibendum ipsum. Sed et felis in orci pellentesque pharetra. In et cursus libero. Fusce congue aliquam augue sit amet iaculis. Vestibulum volutpat orci sit amet nisl pharetra hendrerit at at urna. Donec ut quam libero. Nulla molestie, risus sed suscipit luctus, nisi dolor pharetra elit, vel accumsan odio sapien vitae mauris.`;

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

let phraseToCheck = "put it up";

function palidromeCheck(wordToCheck) {
  let length = wordToCheck.length - 1;
  let index = 0;

  while (index < length) {
    if (wordToCheck[index] === " ") {
      index++;
    } else if (wordToCheck[length] === " ") {
      length--;
    } else if (wordToCheck[index] === wordToCheck[length]) {
      index++;
      length--;
    } else {
      return false;
    }
    return true;
  }
}
console.log(palidromeCheck(phraseToCheck));
