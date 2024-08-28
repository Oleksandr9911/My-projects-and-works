//синтаксис створення обєкта
/*let userInfo = new Object(); //синтаксис "конструктор обєкта"
let userinfo = {}; // синтаксис "літерал обєкта"*/

/*let userInfo = {
    name: "Олександр",// властивість обєкту
    age: 23, // остання кома (висяча)
    "likes javascript": true,
};

console.log(userInfo); //виведе весь вміст обєкту
console.log(userInfo.name);//виведе властивість імя обєкту
console.log(userInfo["likes javascript"]); //виведе логічне значення*/

/*//передаюче імя
let firstPart = "likes";
let userInfo = {
    name: "Олександр",
    age: 23, 
    [firstPart + " javascript"]: true,
};
console.log(userInfo["likes javascript"]);*/
/*
//передаюче імя (спрощено)
let firstPart = "likes";
let userInfo = {
    name: "Олександр",
    age: 23, 
    [firstPart]: true,
};
console.log(userInfo[firstPart]);

/*Переваги квадратних дужок у тому, що оголошенній змінні key присвоєне властивість обєкту
userInfo і не потрібно писати кожен раз властивість. Достатньо змінної */
/*let key = "age";
console.log(userInfo[key]);*/ // виведе значення властивості age */

// назви властивостей усередені обєкту можуть мати зарезервовані слова

/*let userInfo = {
    let: "Олег",
    for:"26",
};
console.log(userInfo.let);
console.log(userInfo.for);*/

//Тип даних Symbol.Створюємо символ id з описом (іменем) "id"
/*let id = Symbol("id");
let userInfo = {
    name: "Олександр",
    age: 23,
    [id]: "Символьне значення"
};
console.log(userInfo);*/
/* Використовуються символи в основному для "приховання властивостей обєкта". Не
зявляються символьні властивості у циклі for in.
Використання системних символів Symbol.iterator, Symbol.toPrimitive і т.д  */

//Вкладеність обєкта
/*let userInfo = {
    name: "Олександр",
    age: 23,
    address: {
        city: "Lviv",
        street: "Gorodostka",
    }
};
console.log(userInfo);
console.log(userInfo.address);
console.log(userInfo.address.city);*/

/*function makeUserInfo(name, age){
return {
    name: name,
    age: age,
}
};
let user = makeUserInfo("Oleg", 26);
console.log(user);*/
// спрощена версія отримання властивостей через змінну

/*function makeUserInfo(name, age){
return {
    name,
    age,
    "likes javascript" : true,
}
};
let user = makeUserInfo("Oleg", 26);
console.log(user);*/

// зміна обєкту.Додавання властивостей

/*let userInfo = {
    name : "Maksym"
}
console.log(userInfo);

userInfo.age = 45;
console.log(userInfo);

userInfo['likes javascript'] = true;
console.log(userInfo);

userInfo.adress = {
    city : "Kyiv",
    street: "Maydanivska",
    born: "23.02.1978"
};
console.log(userInfo);*/

// видалення властивостей обєкта за допомогою директиви delete
/*let userInfo = {
    name : "Maksym",
    age : 45,
    ['likes javascript'] : true,
    adress : {
        city : "Kyiv",
        street: "Maydanivska",
        born: "23.02.1978",
    }
};
console.log(userInfo);

delete userInfo.age;
console.log(userInfo);

delete userInfo['likes javascript'];
console.log(userInfo);*/

// зміна значення властивості обєкту
/*let userInfo = {
    name : "Maksym",
    age : 45,
};
console.log(userInfo);

userInfo.age = 18;
console.log(userInfo);*/
// також змінити значення властивості коли замість змінної стоїть константа

/* копіювання обєктів. При копіюванні обєкта в іншу змінну сам обєкт не дублюється
а лише копіює посилання на обєкт */

/*let userInfo = {
    name : "Maksym",
    age : 45,
};
console.log(userInfo);

user = userInfo;
console.log(user);

userInfo.age = 26;
console.log(userInfo);*/

// дублювання обєктів

/*let userInfo = {
    name : "Maksym",
    age : 45,
}

let user = Object.assign({}, userInfo); // де пусті фігурні дужки новмй пустий обєкт, а userInfo копіювання всіх властивостей даного обєкту до новостворенного
user.age = 30;
console.log(userInfo);
console.log(user);*/

/*let userInfo = {
    name : "Maksym",
    age : 45,
}

let user = Object.assign(userInfo,{ ['javascript']: true, city:"Sambir"}); 
userInfo.age = 30;
console.log(userInfo);*/

/*Перевірка існування властивості */

/*let userInfo = {
    name : "Maksym",
    age : 45,
}

if (userInfo.age) {
    console.log(userInfo.age);
}*/

//опціональний ланцюг
/*let userInfo = {
    name : "Maksym",
    age : 45,
    //address : {
      //  city : "Lviv",
        //street : "Franka"
    //}
}

console.log(userInfo?.address?.city);*/

//оператор in. Необхідно використовуати якщо є властивість але значення її є underfined. Та поверне true оскільки назва властивості існує
/*let userInfo = {
    name : "Maksym",
    age : 45,
    address : {
        city : "Lviv",
        street : "Franka"
    }
}

if ("name" in userInfo) {
    console.log(userInfo.name);
}*/

// цикл for in . Перебирає властивості

/*let userInfo = {
    name : "Maksym",
    age : 45,
    address : {
        city : "Lviv",
        street : "Franka"
    }
}

for( let key in userInfo){
    // ключі
    console.log(key); // name, age ...
    // значення ключів
    console.log(userInfo[key]); // Maksym, 45 ...
}

for( let key in userInfo.address){
    // ключі
    console.log(key); // city, street ...
    // значення ключів
    console.log(userInfo.address[key]); // Lviv, Franka ...
}*/

// методи обєктів. Використання this
/*let userInfo = {
    name : "Максим",
    age : 45,
    address : {
        city : "Львів",
        street : "Франка"
    },
    showInfo() {
        console.log(`${userInfo.name} ${userInfo.age} років та живе у місті ${userInfo.address.city} за 
        адресою вулиця ${userInfo.address.street}`);
    }
}
 userInfo.showInfo(); */

// версія this. Даним методом можна замінити назву обєкта і слово this буде підрозумівати саме той обєкт
/*let userInfo = {
    name : "Максим",
    age : 45,
    address : {
        city : "Львів",
        street : "Франка"
    },
    showInfo() {
        console.log(`${this.name} ${this.age} років та живе у місті ${this.address.city} за 
        адресою вулиця ${this.address.street}`);
    }
}
 userInfo.showInfo();*/

 /*let userInfo = {
    name : "Максим",
    age : 45,
    address : {
        city : "Львів",
        street : "Франка"
    },
    showInfo() {
     /*function show(){   
        console.log(`${this.name} ${this.age} років та живе у місті ${this.address.city} за 
        адресою вулиця ${this.address.street}`); /* при вкладеній функції метод this не буде працювати
        оскільки видасть помилку. Справа у тому, що він у своїй ієрархії звертається до батьківського елемента
        showinfo() у якого немає властивостей зі значенння, на відміну від userInfo
        Дану проблему вирішує стрілочна функція яка немає this, як ніби вкладеності не існує */ 
        
        /*let show = () => console.log(`${this.name} ${this.age} років та живе у місті ${this.address.city} за 
        адресою вулиця ${this.address.street}`);// тепер звертається напряму до батьківського елемента
        show();
    } 
  }
 userInfo.showInfo();*/  

 // переваги this у тому, що наші властивості зі значеннями не привязані до конкретної змінної

/* let userInfo = {
    name : "Максим",
    age : 45,
    address : {
        city : "Львів",
        street : "Франка"
    },
    showInfo() {
        console.log(`${this.name} ${this.age} років та живе у місті ${this.address.city} за 
        адресою вулиця ${this.address.street}`)
  }
}
 userInfo.showInfo();  

 let user = userInfo; 
 userInfo = null; // обнулення змінної обєкту. І якщо би було без this, то була помилка в консолі
 //оскільки всі попередні властивості змінилися після обнулення грубо кажучи стерлися
 // щоб цього не допустити необхідно використати метод this у якого перевага що наші властивості зі значеннями 
 //не привязані до конкретної змінної тим самим запобігаючи зміни властивостей
 user.showInfo(); 
*/

// функції конструтор дозволяють створювати декілька обєктів. але головна умова назва починаєтьмя з великої літери

/*function UserInfo(name, age) {
    //this створює пустий обєкт
    this.name = name;
    this.age = age;
    // заповнені значенння властивостоей this повертає у консоль обєкт
}
console.log(new UserInfo('Микола', 28));
console.log(new UserInfo('Ольга', 25));*/

let userInfo = {
}
console.log(userInfo);

userInfo.name = 'Sasha';
console.log(userInfo.name);

delete userInfo.name;
console.log(userInfo);
