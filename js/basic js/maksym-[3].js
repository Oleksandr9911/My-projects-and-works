let usd_buy = 34.3;
let usd_sell = 36.8;
let balance = 250000;

let income = 0;
let exspence = 0;

let amount_1 = 75000;

balance += amount_1;
income += amount_1;

balance -= 3000;
exspence += 3000;

balance -= 1500;
exspence += 1500;

balance -= 35 * usd_sell;
exspence += 35 * usd_sell;

balance -= amount_1 * 0.07;
exspence += amount_1 * 0.07;

usd_buy++;
usd_sell++;

let amount_2 = 2500 * usd_buy;
balance +=amount_2;
income += amount_2;

balance -= 3000;
exspence += 3000;

balance -= 1500;
exspence += 1500;

balance -= 35 * usd_sell;
exspence += 35 * usd_sell;

balance -= amount_2 * 0.07;
exspence += amount_2 * 0.07;

usd_buy++;
usd_sell++;

let amount_3 = 1800 * usd_buy;
balance +=amount_3;
income += amount_3;

balance -= 3000;
exspence += 3000;

balance -= 1500;
exspence += 1500;

balance -= 35 * usd_sell;
exspence += 35 * usd_sell;

balance -= amount_3 * 0.07;
exspence += amount_3 * 0.07;

let tax = 4500 + income * 0.05;

balance -= tax;
exspence += tax;

console.log(`В цьому кварталі Максим витратив ${exspence} грн.`);
console.log(`Загальний дохід Максима за квартал становить ${income} грн. 
Отже, наприкінці кварталу залишок на рахунку Максима становить ${balance} грн`);
