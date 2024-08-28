//стрічковий тип даних
//синтаксис
/*Записувати строку можна одинарними, двійними та зворотніми лапками*/
let stringFirst = 'Hi! I`m Sasha';
let stringSecond = "Hi! I`m Sasha";
let stringThird = `Hi! I'm Sasha`;
console.log(stringFirst);
console.log(stringSecond);
console.log(stringThird);

/*Одинарних та двійних лапок властивості одинакові
А ось зворотні лапки, окрім властивостей які мають одинарні та двійні лапки
мають ряд переваг. Це можливість вставити змінну всередину зворотних лапок разом із тексом.
У цій змінній можуть бути текст, результат арифметичної операції тощо.
Синтаксис ${value}*/

let textName = "Олександр";
let textAll = `Вітаю, ${textName} ви потрапили на курси Англійської мови.`;
console.log(textAll);

function someSum (a, b){
    return a + b;
}
console.log(`Сума = ${someSum(5, 5)}`);

// багатостроковий запис за допомогою зворотніх лапок

let textStr = `Привіт! 
Я початківець
у сфері ІТ`;
console.log(textStr);

/*Усе, що обвернуто у лапки є стрічковим типом String. При додаванні стрічкового типу
з числовим ми не отримаємо арифметичний результат, а лише складання двох чмсел
для того щоб отримати арифметичний результат у цьому випадку необхідно перед значенням
стрічкового типу (перед лапками) поставити унарний оператор +*/

let valueOne = "255";
console.log(valueOne);
console.log(typeof valueOne);
let valueTwo = 255;
console.log(valueTwo);
console.log(typeof valueTwo);
console.log(valueOne + valueTwo);

// спецсимволи
/*Усередині строки можна записувати ряд спецсимволів
Щоб їх записувати необхідно починати із зворотного слеша \ 
Ось деякі з них*/

// перехід строки \n
textOne = `Привіт! 
Я початківець
у сфері ІТ`;
console.log(textOne);

textTwo = "Привіт!\nЯ початківець\nу сфері ІТ";
console.log(textTwo);

//табуляція (відступ) \t
let text = "Привіт!\n\tти зарахований\n\t\tна бюджет"
console.log(text);

/*зворотній слеш \.Для того, щоб показати його у тексті необхідно дописувати ще один такий слеш.*/
let textSlash = "Щоб знайти потрібну папку \nнеобхідно відкрити декілька папок. \nНаступний шлях диск :D\\photos\\Miami 2017";
console.log(textSlash);

//лапки їх демонстрація у тексті.
//синтаксис \"\"
let textBook = "Я прочитав книгу\"Маленький принц\"";
console.log(textBook);

//іконки, символи UTF-16(uкод), UTF-32(u{код})
let symbolOne = "Я радісний і почуваюся щасливим 😊";
console.log(symbolOne);

//довжина строки. Властивість length 
let lengText = "Олександр";
console.log(lengText.length);

//отримання символа зі строки

let textSymb = "Олександр";
let symbOne = textSymb[0];
let symbTwo = textSymb[textSymb.length -1]; //textSymb[textSymb.length -1] якщо ми не знаємо яка остання літера і хочемо її вивести на екран
console.log(symbOne);
console.log(symbTwo);

for (const char of textSymb){
 console.log(char); //виведе кожну літеру
}

//зміна регістру 
let userName = "Олександр";
console.log(userName.toLowerCase());//нижній регістр 
console.log(userName.toUpperCase());//верхній регістр 

/*пошук підстроки. За допомогою методів
includes, startswith, endswith та indexOf*/

let lastName = "Рудяк";//буква Р починається з 0
let searchLit = "рУ";
console.log(lastName.includes("дя")); //true тому, що є співпадіння з Рудяк
console.log(lastName.startsWith("дя"));//false тому, що співпадіння на початку слова нема такої підстроки
console.log(lastName.endsWith("дяк"));
//true оскільки співпадіння на кінці мдрва є таке
console.log(lastName.indexOf("дяк"));
console.log(lastName.indexOf("дяк", 3));//-1 false
// регістр має значення
// для того щоб знайти слово і якщо у ньому є допущений олин верхній регіст то необхідно використовувати toLowelCase та includes
console.log(lastName.toLowerCase().includes(searchLit.toLowerCase()));

// отримання частини строки (підстроки)
/*за допомогою метода str.slice[ ,end]
де start початок, а end кінець(не включаючи)*/
let last = "Рудяк";
console.log(last.slice(1, 2));
console.log(last.slice(3, 5));
console.log(last.slice(-2, -3));
console.log(last.slice(1));
