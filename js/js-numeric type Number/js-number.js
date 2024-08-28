/*Існують такі числові типи даних
64-бітові це number із яким в основному працюють
є також тип великих чисел bigint від дозволяє робити операції над числами які є більше за 2 53 степені 
і менші за -2 53 степені. Дану категорію чисел не підтримує number через, що існує bigint для цієї задачі*/

// ціле число
let Somenum = 1999;
console.log(Somenum);

// десяткове число
let Somenums = 1.999;
console.log(Somenums);

//для зручнішого записування чисел 1000000/мільон або 0.000001/ноль цілих одна мільйона
// використовують коротке записування 1e6  та 1-e6. Де 6 це кількість нулів
let someBigNum = 1e6; //1 * 1000000
console.log(someBigNum);

let someLittleNum = 1e-6;//1 / 1000000
console.log(someLittleNum);

/* застосовуються 16-кові числа для кодування представлення кольорів та символів*/
console.log(0xFF); // де 0x 16-кова система числення
// на консоль виведе десятковий результат 0xFF = 255

//рідше використовуються 8-кова та 2-йкова система числення
console.log(0o377); // принцип аналогічний з 16-ковим числом
// з вісімкової системи поверне число десятковою системою числення

console.log(0b11111111); // з двійкової системи числення повертає 10-кове число

/* метод toString(base)
метод num.toString(base) повертає результат числа стрічковим типом даних
згідно вказаного значення base. Якщо base = 2 поверне двійковою системою числення.
За замовчуванням у base = 10. Де num це змінна зі значенням. На основі цього значення
і проводиться метод num.toString(base) і повертає стрічновий тип даних та відповідну систему
числення яка була вказана */

let num = 255;
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString());
console.log(num.toString(16));

//заокруглення чисел
// у JS є вбудований обєкт Math, який має декілька функцій для роботи із заокругленням

// Math.floor() повертає число із заокругленням в меншу сторону
let num1 = 2.5;
let num2 = 7.9;
let num3 = -2.2;
console.log(Math.floor(num1));
console.log(Math.floor(num2));
console.log(Math.floor(num3));

// Math.ceil() повертає число із заокругленням в більшу сторону
/*let numOne = 2.5;
let numTwo = 7.9;
let numThree = -2.2;
console.log(Math.ceil(numOne));
console.log(Math.ceil(numTwo));
console.log(Math.ceil(numThree));*/

// Math.round() повертає число із заокругленням в найближче ціле
let numOnes = 2.5;
let numTwos = 7.9;
let numThrees = -2.2;
console.log(Math.round(numOnes));
console.log(Math.round(numTwos));
console.log(Math.round(numThrees));

// проблема у тому, що Math.round() повертає лише заокруглення до цілого числа.
// а нам потрібно, щоб заокруглення було до десятих, сотих і тд
// є спосіб множення і ділення

let numOne = Math.round(2.556 * 10) / 10; //25.56 -> 26 / 10 = 2.6
let numTwo = Math.round(2.556 * 100) / 100; //255.6 -> 256 / 100 = 2.56
let numThree = Math.round(2.5469 * 100) / 100; //254.69 -> 255 / 100 = 2.55
console.log(numOne);
console.log(numTwo);
console.log(numThree);

// метод tofixed() повертає стрічкове значення числа

let number = 28.568;
console.log(number.toFixed(1)); // де 1 це після першого знаку після коми заокруглити
// тобто 28.6
// для того щоб результат виводився числовий перед змінною ставимо +
console.log(+number.toFixed(1));

// проблема неточних чисел
 let numFirst = Math.round(1.005 * 100) / 100; // очікуємо 1.01, а виводить 1
 console.log(numFirst);

 let numSecond = 12.35;
 console.log(+numSecond.toFixed(1)); // 12.4, а виводить 12.3

 let problem = 0.1 + 0.2 === 0.3;
 console.log(problem);// false
 console.log(0.1 + 0.2); // 0.3000000004

 // вирішення проблеми за допомогою Number.EPSILON
 // це функція, яка допомагає коректувати заокруглення дясяткових дробів
let sourceNum = 1.005 + Number.EPSILON; 
let numFour = Math.round(sourceNum * 100) / 100; // 1.01 виводить 
 console.log(numFour);

//перевірка на безкінечність (infinity) isFinity та помилку обчислення (NaN) isNaN

console.log(Number(25 + 'Oleg')); //NaN
console.log(isNaN(25 + 'Oleg')); //true

console.log(isFinite("25"));//true "25" -> 25 перетворює аргумент у число і повертає істину
console.log(isFinite("Hi!"));//false NaN
console.log(isFinite(25 / 0));//false infinity

// parseInt та parseFloat
// за допомогою унарного оператора та функції Number ми перетворюємо стрічковий тип на числовий
// parseInt (повертає цілі числа) та parseFloat (з плавлячою комою) потрібні у тому випадку, якщо ми працюємо зі стрічковим типом у якому присутні 
// одиниці вимірювання "150px"

let valueOne = parseInt("150.56px"); // першим має бути число, якщо буде літера тоді буде NaN
console.log(valueOne);
console.log(typeof valueOne);

let valueTwo = parseFloat("150.56px");
console.log(valueTwo);
console.log(typeof valueTwo);
// у parseInt є другий параметр системи числення
console.log(parseInt('ff', 16));

