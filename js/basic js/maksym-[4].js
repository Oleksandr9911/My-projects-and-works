let eur_sell = 41.2;
let usd_sell = 36.8;
let euro = 2500;
let dollar = 3000;
let v = 0;
let ve = 0;
let vd = 0;
let income = 0;

let amount_1 = 100000;

income += amount_1;

let amount_2 = 200000;
income += amount_2;

let amount_3 = 300000;
income += amount_3;

let amount_4 = 150000;
income += amount_4;

ve = euro * eur_sell;
vd = dollar * usd_sell;
v = ve + vd;

let tax = income * 0.05;

let b = income * 0.10;
let c = income * 0.05;
let ESV = 17400;
let bisness = 100000;

let zalyshok = income - (tax + b + c) - v - bisness - ESV; 

console.log(`За рік Максим заробив — ${income} грн`);
console.log(`Єдиний податок 5% складає ${tax} грн`);
console.log(`Відрахування у фонди «Повернись живим» та «Діти Героїв» складає ${b} грн та ${c} грн відповідно`);
console.log(`На валютну карту сумарно відкладено ще ${v} грн`);
console.log(`Залишок на рахунку Максима складає ${zalyshok} грн`);