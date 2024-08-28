let colorEyes = prompt('Введіть колір очей користувача');
let userAge = prompt('Введіть вік користувача');
let userName = prompt('Введіть імя користувача');
let user;

user = userName;

console.log(`${user} має ${colorEyes} колір очей, ${userAge} років.`);
console.log(typeof user);
console.log(typeof colorEyes);

userAge = Number(userAge);

console.log(userAge);
console.log(typeof userAge);