// оголошення функції
// оголосити можна двома способами Function Declaration та функціольним виразом Function Expression

// ім'я функції та її значення
// в імені функцій як правило використовують префікси. Кожен префікс має наступні властивості та значення
/*
show... - відображає інформацію
get...  - повертає значення
calc... - щось обчислює
create... - щось створює
check... - щось перевіряє і повертає логічне значення

наприклад 
showMessage - показати повідомлення
getOptions - отримати параметри
calcSum - обчислення суми
*/

// функція виводу повідомлення
/*function showMessage() {
    console.log('Повідомлення')
} 
showMessage();
showMessage();
showMessage();*/
// основне призначення функції позбавлення від дублювання коду

// функцію можна вкладувати у іншу. Такі функції називаються вкладеними
/*function getSumm() {
    let numOne, numTwo;

    function getnumOne() {
        numOne = 1;
    }

    function getnumTwo() {
        numTwo = 2;
    }

    getnumOne ();
    getnumTwo ();

    let numSumm = numOne + numTwo;
    console.log(numSumm);
} getSumm();*/ // при спробі вивести дочірні фукції виведе помилку

// локальні та зовнішні змінні. Локальна зміна - це змінна яка була оголошенна всередині функції.
// при спробі вевести її за межі виведе помилку. Зовнішня зміна - це зміна яка була оголошенна поза межами функції
// якщо у локальній та зовнішній змінні дати імя одинакове, але при цьому різні значення, то такі змінні вважаються різними

/*let message = 'Золотий'; //Зовнішня зміна

function getMessage(){
    let message = 'Павлін';//Локальна зміна
    console.log(message);
}

console.log(message);
getMessage();*/

// зовнішня зміна яка виведенна за межами усіх функцій називається глобальною

let globalVar = 'Глобальна змінна';
 function getSumm() {
    let numOne, numTwo;

    function getnumOne(){
        numOne = 1;
        console.log(globalVar);
    }

    function getnumTwo(){
        numTwo = 2;
    }
    getnumOne();
    getnumTwo();

    let numSumm = numOne + numTwo;
    console.log(globalVar);
 }

 console.log(globalVar);
 
 getSumm();

//обчислення параметрів(аргументів)

/*function calcSumm(numOne, numTwo) {
    console.log(`Змінна numOne: ${numOne}`);
    console.log(`Змінна numTwo: ${numTwo}`);

    let numSumm = numOne + numTwo;
    console.log(`Сума: ${numSumm}`);
}*/

//calcSumm(12, 11);

// функція колбек - функція яке передає свої значення іншій функції як аргумент

function calcSumm(numOne, numTwo, more, less) {
    let numSumm = numOne + numTwo;

    if (numSumm > 3) {
        more();
    } else {
        less();
    }
}

function showMoreMessage (){
    console.log('Більше за 3')
}

function showLessMessage (){
    console.log('Менше за 3')
}

calcSumm(5, 8, showMoreMessage, showLessMessage);

// повернення результату

/*function calcSumm(numOne, numTwo) {
    let numSumm = numOne + numTwo;
    //повернення
    return numSumm;
    // далі код зупиняється

} 

let funcResult = calcSumm(1, 2);
console.log(`Сума: ${funcResult}`); */

// рекурсія - це коли функція викликає саму собі
/*function getSumm(numOne, numTwo) {
    let numSumm = calcSumm(numOne, numTwo);
    console.log(numSumm);
}

function calcSumm(numOne, numTwo){
    return numOne + numTwo;
}
getSumm(5, 5); */

function calcSumm(numOne, numTwo){
    let result = 1;
    // множимо result на numOne, numTwo-разів в циклі
    for(let i = 0; i < numTwo; i++) {
        result *= numOne;
    }
    return result;
}

console.log(calcSumm(2, 3));

//функціольний вираз Function Expression
/*let showMessage = function() {
    console.log(`Hello!`)
};

showMessage();*/
/* різниця Function Expression від Function Declaration полягає у тому,
що виклик функції можна здійснити лише після оголошення функції 
в противному випадку видасть помилку
В основному необхідна, коли виклик функції не видний за межами функції*/

// стрілочна функція Arrow function (спрощена версія фукціонального виразу)
/*let showMessage = () => console.log(`Hello!`);
showMessage();*/

/*let getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage('Слава', 'Україні'));*/

//багатострілкова функція
let getMessage = (text, name) => {
    let message = text + ', ' + name + '!';
    return message;
};
console.log(getMessage('Слава', 'Україні'));

//планування setTimeout та setInterval
/* Для реалізації планування існують два методи
setTimeout - викликає функцію один раз через певний проміжок часу інтервалу
setInterval - викликає функцію один раз через певний проміжок часу інтервалу*/

function showMessage(text, name){
    console.log(`${text}, ${name}!`);
} 
//setTimeout(showMessage, 10000, 'Слава', 'Україні'); //1000 = 10cek
setInterval(showMessage, 10000, 'Слава', 'Україні');
//clearInterval та clearTimeout призупиняють роботу затримки
