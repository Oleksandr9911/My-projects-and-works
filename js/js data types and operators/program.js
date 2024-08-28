// є ряд примітивних типів даних Boolean, number, bigint, string, symbol, null, underfined. 
//Також є складені типи object та function. Різниця від примітивних полягає у тому, що 
//вони здатні і своєму тілі зберігати декілька типів даних.
// щоб змінити тип даних з одного в інший можна за допомогю одноймених функцій Boolean, number, bigint, string, symbol

let ag = 23;
console.log(String(ag));
console.log(typeof String(ag));
//рядковий (string)

let age = 23;
console.log(age);
console.log(typeof age);
//числовий тип (Number)

// базові(математичні оператори)
//оператор додавання
let namee = "Олександр " + 23;
console.log(namee);
console.log(typeof namee);
//рядковий (string)

namee = 23 + " Олександр"; // let не потрібно вказувати оскільки ми вже раніше оголосили змінну, 
//і лише змінили її значення
console.log(namee);
console.log(typeof namee);
//рядковий (string)

let a = "Олег" + " Олегович";
console.log(a);
console.log(typeof a);
//рядковий (string)

let v = "2" + 2;
let h = +"2" + 2;
console.log(v);
console.log(typeof v);
//рядковий (string)
console.log(h);
console.log(typeof h);
//числовий тип (Number)

bl = true;
console.log(bl);
console.log(typeof bl);

// оператори / * та - не можна застосовувати до операндів рядкового типу, лише з числовим

// оператор присвоєння та інкремент ++ та декремент --
let car = 'Audi';
let year = 1999;
let cy = ++year; // інкримент типу префіксний до значення змінної додає одиницю 
//тому, що здійснюється першим зчитування оператора інкримент 
console.log(`${car} ${year}`);
 
let cars = 'Wolksvagen';
let yearr = 1999;
let cr = yearr++; //тут інкримент типу постфіксний навпаки не додає одиницю 
//тому, що здійснюється першим зчитування значення змінної 
console.log(`${cars} ${yearr}`);

let m = 45 + 45;
let n = 200;
let result = 500 - (m = n + 50);
console.log(`результат обчислення ${result}`);

n = m = result = (24 + 24) * 2;

console.log(n,m ,result);

// оператор порівння, повертає логічний тип даних
let q = '45' == 45; //true
let t = 9 < 0; //false
let u = 9 > 4; // true
let y = 20 >= 20; // true
let i = 21 <= 18; // false
let l = 21 != 2; // true
let k = 21 !== 2; // true
// строга рівність та нерівність перевіріє знанчення без перетворень тобто рядкове 45 не стане числовим
let kk = '21' !== 2; // true
let kz = '45' === 45; // false
console.log(`45 == 45 ${q}`);
console.log(`9 < 0 ${t}`);
console.log(`9 > 4 ${u}`);
console.log(`20 >= 20 ${y}`);
console.log(`21 <= 18 ${i}`);
console.log(`21 != 2 ${l}`);
console.log(`21 !== 2 ${k}`);
console.log(`'21' !== 2 ${kk}`);
console.log(`'45' === 45 ${kz}`);

// логічні оператори 
// оператор АБО повертає істину якщо у ньому є хоча б одне true
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

// шукає першу істину, якщо всі знанчення істині повертає останнє

console.log('Максим' || 57 || true); //'Максим'
console.log('' || 45 || false); //45

// оператор І повертає істину якщо усі значення є true. Також має вищий пріоритет, ніж АБО
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

// шукає першу хибу, якщо всі знанчення не хибні повертає останнє

console.log('Максим' && 57 && true); //true
console.log(8 && 45 && false); //false

console.log(7 && false || true && 10); //10

let g = 25;

 g > 10 && console.log(`Значення ${g}`);

 // оператор НЕ повертає протилежне значення
 console.log(!false); //true
 console.log(!!false); //false тому, спершу обробляється !false і повертає true
 // далі отриманий результат обробляється !true і повертає false грубо кажучи повертає початкове значення до обробки оператором НЕ
 console.log(!0); //true
 console.log(!!''); //false
 // може використовуватися щоб присвоїти значенню логічний тир
 // також можна це зробити запомогою функції Boolean()
// оператор ?? повертає перше значення яке не ні null, ні underfied