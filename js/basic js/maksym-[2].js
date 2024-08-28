let usd_sell= 36.8;

let income = 0;
let tex = 0;

let amount_1 = 75000;

income += amount_1;

let amount_2 = 2500 * usd_sell;

income += amount_2;

let amount_3 = 1800 * usd_sell;

income += amount_3;

tax = 4500 + income * 0.05;

console.log(`Загальна сума доходу Максима складає ${income} грн.`);
console.log(`В кінці кварталу Максиму необхідно сплатити ${tax} грн.`)