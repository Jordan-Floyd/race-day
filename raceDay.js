// Race day registration program
// Change boolean t/f on registeredEarly for  different outputs
// Change age to > 18 for different outputs

let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const age = 16;

if (registeredEarly && age > 18) {
  raceNumber += 1000;
  }

if (registeredEarly && age > 18) {
  console.log(`${raceNumber}-Your race will start at 9:30am!`);
} else if (!registeredEarly && age > 18) {
  console.log(`${raceNumber}-Your race will start at 11:00am!`);
} else if (age < 18) {
  console.log(`${raceNumber}-Your race will start at 12:30pm!`);
} else {
  console.log(`${raceNumber}-Please see registration desk!`);
}

