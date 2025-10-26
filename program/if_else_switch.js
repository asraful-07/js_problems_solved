// if else
let taka = 1800;

if (taka > 800 && taka < 1600) {
  console.log("true of CoxB");
  if (taka > 1200) {
    console.log("eat to Br");
  } else {
    console.log("eat Pa");
  }
} else if (taka < 600) {
  console.log("true of RajR");
  if (taka > 200) {
    console.log("eat to Br");
  } else {
    console.log("eat Pa");
  }
} else {
  console.log("go to home and sleep and dream");
}

// on more if else
let salary = 180;
const edu = "HSC";

if (salary > 100 && edu === "HSC") {
  console.log("come to here okay");
} else if (salary < 90 || edu === "BSC") {
  console.log("you ar right");
} else {
  console.log("oh ho next time bro don't worry");
}

// switch case
let day = "sat";

// let day = prompt("Enter a short day name (sat, sun, mon, etc):");
//  you ues to game input type of terminal

switch (day) {
  case "sat":
    console.log("Today is Saturday! Time to relax");
    break;

  case "sun":
    console.log("It's Sunday! Family time");
    break;

  case "mon":
    console.log("Back to work");
    break;

  case "tue":
    console.log("Tuesday vibes");
    break;

  case "wed":
    console.log("Midweek hustle");
    break;

  case "thu":
    console.log("Almost weekend");
    break;

  case "fri":
    console.log("Friday! Jummah Mubarak");
    break;

  default:
    console.log("Invalid day entered");
}

// one more example
let num = 8;

switch (num) {
  case 1:
    console.log("hello");
    break;
  case 2:
    console.log("hi");
    break;
  case 3:
    console.log("how");
    break;
  case 4:
    console.log("are");
    break;
  case 5:
    console.log("you");
    break;
  case 6:
    console.log("bro");
    break;
  default:
    console.log("end of day next day come");
}
