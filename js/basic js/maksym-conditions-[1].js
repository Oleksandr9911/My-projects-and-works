let hours = 205;
let hour = 450;

if (hours < 60){
    hours *= hour;
    sum = hours
    console.log(`Цей проєкт буде коштувати ${sum} грн.`);
} else if (hours > 60 && hours < 120) {
    hours *= hour;
    hours2 = hours * 0.25;
    sum = hours - hours2;
    console.log(`Цей проєкт буде коштувати ${sum} грн.`);
} else if (hours > 120) {
    hours *= hour;
    hours2 = hours * 0.35;
    sum = hours - hours2;
    console.log(`Цей проєкт буде коштувати ${sum} грн.`);
}

