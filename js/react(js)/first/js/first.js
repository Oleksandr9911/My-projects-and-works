// отримуємо в константу елемент для виводу
//const rootElement = document.getElementById('root');

// виводимо (відмальовуємо) нашу розмітку 
//ReactDOM.createRoot(rootElement).render(<h1>Мій перший React застосунок!</h1>)


//Як працює JSX
// отримуємо в константу елемент для виводу
//const rootElement = document.getElementById('root');

//Javascript
// Зберігаємо розмітку в змінну або константу
//let someLayout = `<h1>Синтаксис JSX</h1>`;
// виводимо (відмальовуємо) нашу розмітку 
//rootElement.insertAdjacentHTML("beforeend", someLayout)

//JSX + REACT
// Зберігаємо розмітку в змінну або константу
//let someLayout = (<h1>Синтаксис JSX</h1>);
// виводимо (відмальовуємо) нашу розмітку 
//ReactDOM.createRoot(rootElement).render(someLayout);

//при обробці JSX перетворюється на JS код
//console.log(someLayout);

//подивитися можна за посиланням https://babeljs.io/repl/

//фрагменти розмітки
//при побудові конструкцій ми не можемо
//виводити кілька елементів першого рівня вкладеності

// отримуємо в константу елемент для виводу
//const rootElement = document.getElementById('root');

// Зберігаємо розмітку в змінну або константу
//let someLayout = (
//    <>
//<h1 className="title">Синтаксис JSX</h1>
//<div>JSX чи Javascript XML - це розширення синтаксису мови <br/>програмування JavaScript</div>
//   </>
//);
// виводимо (відмальовуємо) нашу розмітку 
//ReactDOM.createRoot(rootElement).render(someLayout);


//інтеграція та взаємодія з JavaScript кодом 
//Для виводу JavaScript коду використовуємо {}

//вивід

//зміна/константа
//let someSum = 2 * 1000;

//функція
//function returnSum(a , b) {
//    return a + b
//}

// отримуємо в константу елемент для виводу
//const rootElement = document.getElementById('root');

// Зберігаємо розмітку в змінну або константу
//let someLayout = (
  //  <>
//<h1 className = "title">Синтаксис JSX</h1>
//<div className = "text">Зарплатня REACT розробника(ці): {returnSum(2000,8000)}$</div>
  // </>
//);
// виводимо (відмальовуємо) нашу розмітку 
//ReactDOM.createRoot(rootElement).render(someLayout);

//зміна/константа
//let someSum = 2 * 1000;

//дані
//const someArr = [
  //  "Привітність",
  //  "Комунікабельність",
    //"Англійська"
//];

// отримуємо в константу елемент для виводу
//const rootElement = document.getElementById('root');

// Зберігаємо розмітку в змінну або константу
//let someLayout = (
  //  <>
//<h1 className = "title">Синтаксис JSX</h1>
//<div className = "text">Зарплатня REACT розробника(ці): 2000$</div>
//<h2>Вимоги:</h2>
//<ul>
  //  {someArr.map((item,index) => (<li key = {index}>{item}</li>))}
//</ul>
//     </>
//);
// виводимо (відмальовуємо) нашу розмітку 
//ReactDOM.createRoot(rootElement).render(someLayout);

//дані
//const isTitle = true;

// отримуємо в константу елемент для виводу
//const rootElement = document.getElementById('root');

// Зберігаємо розмітку в змінну або константу
//let someLayout = (
  //  <>
//{isTitle && <h1 className="title">Синтаксис JSX</h1>}
//<div  className="text">Зарплатня REACT розробника(ці): 2000$</div>
//     </>
//);
// виводимо (відмальовуємо) нашу розмітку 
//ReactDOM.createRoot(rootElement).render(someLayout);

//дані
//const someArr = [
    //"Привітливість",
    //"Комунікабельність",
  //  "Англійська"
//];

// отримуємо в константу елемент для виводу
//const rootElement = document.getElementById('root');

// Зберігаємо розмітку в змінну або константу
//let someLayout = (
//    <>
//<h1 className = "title">Синтаксис JSX</h1>
//<div className = "text">Зарплатня REACT розробника(ці): 2000$</div>
//{ Boolean (someArr.length) &&
//<>
//<h2>Вимоги:</h2>
//<ul>
//    {someArr.map((item,index) => (<li key = {index}>{item}</li>))}
//</ul>
//</>
//}
//     </>
//);
//// виводимо (відмальовуємо) нашу розмітку 
//ReactDOM.createRoot(rootElement).render(someLayout);

//події
//function divAction(){
  //  console.log(`Click!`);
//}

// отримуємо в константу елемент для виводу
//const rootElement = document.getElementById('root');

// Зберігаємо розмітку в змінну або константу
//let someLayout = (
  //  <>
//<h1 style={{color:"yellow",fontSize:"30px"}} className = "title">Синтаксис JSX</h1>
//<div onClick={divAction} className = "text">Зарплатня REACT розробника(ці): 2000$</div>
    // </>
//);
// виводимо (відмальовуємо) нашу розмітку 
//ReactDOM.createRoot(rootElement).render(someLayout);

//дані
const someArr = [
    "Привітливість",
    "Комунікабельність",
    "Англійська"
];

const someAr = [
  "Супровід технічних програм",
  "Забезпечення установки ПЗ",
  "Введення документії"
];

let salary1 = 500;
let salary2 = 1000;

//події
function divAction(){
  console.log(`Click!`);
}

function divAct(){
  alert(`Ваша заявка подана !`);
}

// отримуємо в константу елемент для виводу
const rootElement = document.getElementById('root');

// Зберігаємо розмітку в змінну або константу
let someLayout = (
  <>
<h1 style={{color:"green",fontSize:"60px"}} className = "title">Львівобленерго</h1>  
<h1 style={{color:"green",fontSize:"30px"}} className = "title">Вакансія інженер-програміст</h1>

<img src="img/ssss.png" />

<div onClick={divAction} className = "text">Зарплатня розробника(ці): від {salary1}$ до {salary2}$</div>

  { Boolean (someArr.length) &&
<>
<h2 style={{color:"green"}}>Вимоги:</h2>
<ul>
    {someArr.map((item,index) => (<li key = {index}>{item}</li>))}
</ul>
</>
}

{ Boolean (someArr.length) &&
<>
<h2 style={{color:"green"}}>Особливості роботи:</h2>
<ul>
    {someAr.map((item,index) => (<li key = {index}>{item}</li>))}
</ul>
</>
}
<button onClick={divAct} 
style={{background:"green",color:"white",fontSize:"15px",fontWeight:"bold",padding:"8px 10px",borderRadius:"20px",width:"120px",height:"40px",marginLeft:"10px"}}>
  Відгукнутися</button>
   </>
);
// виводимо (відмальовуємо) нашу розмітку 
ReactDOM.createRoot(rootElement).render(someLayout);