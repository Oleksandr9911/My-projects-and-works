let first_day_hours = 1;
let step = 1;
let max_hours = 10;

const price_hour = 28;

let duration = 0;
let income = 0;
let hours = first_day_hours;

do {

    duration += hours;
    hours += step;

} while(hours <= max_hours);
income = duration * price_hour;

console.log(`Проєкти займуть ${duration} годин,`);
console.log(`Максим заробить ${income} доларів`);