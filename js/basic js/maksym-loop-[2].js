let first_project = 7;

let hours = 0;
let last_hours = 0;
let projects = 0;

for (let i = 1; i <= 6; i++) {
    let next_hours;

    if (!last_hours){
        next_hours = first_project * 8;
    }else {
        next_hours = last_hours * 1.25;
    }

    if (hours + next_hours > 160) break;

    projects ++;
    hours += next_hours;
    last_hours = next_hours;
}

let days = Math.ceil(hours / 8);

console.log(`Максим встигне зробити ${projects} 
проєктів загальною тривалістю ${days} днів`);