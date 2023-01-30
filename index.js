//test for the bill values 275, 40, 430
//using a tip calculator
//if the value is between 50 and 300 then the tip should be b/w 15%
// if value is different, the tip is 20%

//solution;
// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `th bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

/*const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `th bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `th bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

//FUNCTIONS

function logger() {
  console.log("my name is Udemba");
}

//running /calling /invoking the function.
logger(); // we can call the function as many times as possible.

// a function can receive and return data back.

/*function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}*/

//call the function to substitute the two argumnet with index

/*fruitProcessor(5, 0);*/

//NOW TO actually appreciate the juice variable declared, we need to store the call function "fruitprocessor".
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(12, 40);
console.log(appleOrangeJuice);

//the function below is a function declaration.
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
//in function, parameter is a placeholder whereas an argument is the actual value to be tested.
const age1 = calcAge1(1991);
console.log(age1);

//function as expression.
const calcAge2 = function (birthYear) {
  return 2039 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

//ARROW Function
const calcAge3 = (birthYear) => 2038 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// calc the years left for A to retire

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2028 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearUntilRetirement(1991, "G.C"));
console.log(yearUntilRetirement(1981, "Andrew"));

//Function Calling Other Function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//code chalenge

const calcAvrg = (dolphin, koalas) => totalScore;
const AvrgDolphinScore = (44 + 23 + 71) / 3;
const AvrgKoalasScore = (65 + 54 + 49) / 3;
const totalScore = AvrgDolphinScore;
const totalScore1 = AvrgKoalasScore;

console.log(totalScore, totalScore1);

//workings
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//text1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("no team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

//test2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

//intro to Array
//in Array its not proper to declare variables individually when it be done using array structure.
//for example
const friend1 = "micheal";
const friend2 = "steven";
const friend3 = "peter";
//this is wrong but can best be expressed like

const friends = ["micheal", "steven", "peter"];
console.log(friends);

//we can also use this other format
const y = new Array(1881, 1987, 2002, 2009, 1990);
console.log(y);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);

//primitive values declared with const can not be changed however Array is not a primitive value
//and can be mutated however we cant replace the whole Array for examples

//friends = ["bambam", "theobat"];
const firstName = "Godswill";
const Godswill = [firstName, "udemba", 2023 - 1988, "teacher", friends];
console.log(Godswill);

//exercise
const calcAges2 = function (birthYear) {
  return 2039 - birthYear;
};

const years = [1881, 1987, 2002, 2009, 1990];
const ages1 = calcAges2(years[0]);
const ages2 = calcAges2(years[1]);
const ages3 = calcAges2(years[years.length - 1]);
console.log(ages1, ages2, ages3);

//this however can be captured in an array
const ages = [
  calcAges2(years[0]),
  calcAges2(years[1]),
  calcAges2(years[years.length - 1]),
];
console.log(ages);

//Basic Array operations {method}
//.push add an element to the end of an Array
//const friends=["micheal", "steven", "peter"];
const fris = ["mich", "steven", "peter"];
fris.push("jay");
console.log(fris);

//unshift is used to add in front of an array
fris.unshift("moses");
console.log(fris);

//pop removes from an array

fris.pop();
console.log(fris);

//to remove from the front of an array we use shift
fris.shift();
console.log(fris);
// to capture the removed element
const shifted = fris.shift();
console.log(shifted);

//challenge
//const Bill = [125, 555, 44];
//const tips = Bill <= 300 && Bill >= 50 ? Bill * 0.15 : Bill * 0.2;

//console.log(tips);

//or
/*const calcTip = function (Bill) {
  return Bill <= 300 && Bill >= 50 ? Bill * 0.15 : Bill * 0.2;
};

const Bills = [125, 555, 44];
const tips = [calcTip(Bills[0]), calcTip(Bills[1]), calcTip(Bills[2])];
const total = [Bills[0] + tips[0], Bills[1] + tips[1], Bills[2] + tips[2]];
console.log(tips, Bills, total); */

//objects
const jonas = {
  firstName: "jonas",
  lastName: "owo",
  birthYear: 1993,
  job: "teacher",
  friends: ["mich", "peter", "steve"],
  hasDriversLicense: false,

  // calcAge: function () {
  //   console.log(this);
  //   return 2023 - jonas.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - jonas.birthYear;
    return jonas.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${jonas.age} old ${jonas.job} and he has ${
      jonas.hasDriversLicense ? "a " : "no"
    } drivers license`;
  },
};
console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);

//challenge

//write a programm to print "janas is 46 years old
//teacher and he has a drivers license"
console.log(jonas.getSummary());

//code challenge

const Mark = {
  firstName: "MARK",
  lastName: "miller",
  weight: 78,
  height: 1.69,

  calcBmi: function () {
    this.Bmi = this.weight / this.height ** 2;
    return Mark.Bmi;
  },
};
Mark.calcBmi();
console.log(Math.floor(Mark.Bmi));

const john = {
  firstName: "John",
  lastName: "Smith",
  weight: 92,
  height: 1.95,

  calcBmi: function () {
    this.Bmi = this.weight / this.height ** 2;
    return john.Bmi;
  },
};
john.calcBmi();
console.log(Math.floor(john.Bmi));

if (Mark.Bmi > john.Bmi) {
  console.log(
    `${Mark.firstName} ${Mark.lastName} BMI ${Mark.Bmi} is higher than ${john.firstName} ${john.lastName} which is BMI ${john.Bmi} `
  );
} else if (john.Bmi > Mark.Bmi) {
  console.log(
    `${john.firstName} ${john.lastName} BMI is ${john.Bmi} and higher than ${Mark.firstName} ${Mark.lastName} which is BMI ${Mark.Bmi} `
  );
}

//the iteration :the for loop
//for loop keeps running while the condiction is true
for (let i = 7; i <= 10; i++) {
  console.log(`lifting weight  ${i}`);
}

const jonasArray = [
  "jonas",
  "joliet",
  2023 - 1990,
  "teacher",
  ["mich", "peter", "kelson"],
  "machine",
  true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  //filling types array
  //types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

const year = [1990, 1980, 1996, 1967];
const Ages = [];

for (let i = 0; i < year.length; i++) {
  Ages.push(2023 - year[i]);
}
console.log(Ages);

//continue and break
console.log("---ONLY STRING---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

//LOOPING BACKWARDS

const Sam = [
  "jonas",
  "joliet",
  2023 - 1990,
  "teacher",
  ["mich", "peter", "kelson"],
  "machine",
];

for (let i = Sam.length - 1; i >= 0; i--) {
  console.log(i, Sam[i]);
}

//create a loop inside of a loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`exercise ${exercise}, lifting rep ${rep}`);
  }
}

//while loop
//in while loop we can only specify a condition

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(` lifting rep ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  //console.log(` While : lifting rep ${rep}`);
  rep++;
}

//dice to stop when 6 is rolled out
let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice);

//at this point note that
//math.floor rounds down
//math.ceiling rounds up and
//math.trunc round towards zero however is like math.floor for positive numbers and math.ceiling for negative numbers

/*while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("while stops b/c 6 is out");
})*/

//code challenge

const calcTips = function (bills) {
  return bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;
};
const bills = [22, 295, 176, 448, 37, 105, 10, 1100, 85, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTips(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log(bills, tips, total);

//calculating the avaerage of all our calculation
const calcAverages = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    //or sum +=arr[i]
  }
  return sum / arr.length;
};
console.log(calcAverages(total));
console.log(calcAverages(tips));

//USING GOOGLE, STACKOVERFLOW AND MDN

//problem
//we work for  company building a smart home thermometer, our most recent task is this:
//goiven an array of temperatures of a day, calculate the temp amplitude, keep in mind
//that sometimes there might be a sensor error

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem
// -what is temp amplitude? Answer : difference btw highest and lowest temp
//-how to compute max and min temp
// -what is a sensor error? and what to do?

//2) breaking up into sub-problems
// - how to ignore error?
//- find max value in temp array
//- find min value in temp array
// - subtracting min from max and return it to get the amplitude

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//problem2
// function should now contain 2 array of temps

// 1) understand the question/problem
// -with 2 arrays, should we implement functionality twice? No! just marge two array

//Breaking up in to sub-Problems
// - marge 2 array

//destructuring an array
//nested array

const nested = [2, 3, [5, 7]];
const [i, , j] = nested;
console.log(i, j);
