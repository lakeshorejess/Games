let monday = 8;
let tuesday = 7;
let wednesday = 6;
let thursday = 5;
let friday = 8;
let saturday = 9;
let sunday = 10;

let getActualSleepHours = () => monday + tuesday + wednesday + thursday + friday + saturday + sunday;

let getIdealSleepHours = idealHours => idealHours * 7;

let calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  let difference = idealSleepHours - actualSleepHours;
  if (actualSleepHours >= idealSleepHours) {
    return 'Great job! You are getting enough sleep!'
  } else { 
    return `You need more sleep! Catch up by getting ${difference} hours more this week.`}
}

console.log(calculateSleepDebt());


