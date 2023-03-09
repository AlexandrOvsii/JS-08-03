const totalMinutes = 70;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

const doubleDigitsHours = String(hours).padStart(2, `0`);
const doubleDigitsMinutes = String(minutes).padStart(2, `0`);

const clock = `${doubleDigitsHours}:${doubleDigitsMinutes}`;
console.log(clock);