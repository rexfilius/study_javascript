// For loop
let age = 0;
for (let i = 0; i < 15; i++) {
  age += i;
}
console.log(`age is ${age} \n`);

function scream(n) {
  let str = '';
  for (i = 0; i < n; i++) {
    str += 'a';
  }
  return str;
}

const s1 = scream(1);
console.log(`scream 1: ${s1} \n`);

// Modulus Scream
function modScream(n) {
  let str = '';
  for (i = 0; i < n; i++) {
    if (i % 2 == 0) {
      str += 'a';
    } else {
      str += 'A';
    }
  }
  return str;
}

const s2 = modScream(5);
console.log(`scream 5: ${s2} \n`);

// A While loop
// copied this from Alchemy discord chat
function topDouble(value, top) {
  //let result = 1;
  while (true) {
    if (value >= top) {
      break;
    } else {
      value *= 2;
    }
    
  }
  return value/2;
}

const doubleNum = topDouble(2, 100); // answer should be 64
console.log(`doubling: ${doubleNum}`);
