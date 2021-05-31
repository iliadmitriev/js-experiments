const myName = 'Elia';
console.log(typeof myName);
const age = 26;

console.log('Привет, меня зовут ' + myName + ', мой возраст ' + age);
console.log(`Привет, меня зовут ${myName}, мой возраст ${age}, ` +
    `и я ${age > 18 ? 'совершеннолетний' : 'не совршеннолетний'} `);

const myFirstName = 'Илья';
console.log(myFirstName.length);
console.log(myFirstName.toLocaleUpperCase());
console.log(myFirstName.toLocaleLowerCase());
console.log(myFirstName.charAt(2));
console.log(myFirstName.indexOf('е'), myFirstName.indexOf('я'));
console.log(myFirstName.toLocaleLowerCase().startsWith('ил'));
console.log(myFirstName.toLocaleLowerCase().endsWith('я'));
console.log(myFirstName.repeat(3));

const str = '  пароль   ';
console.log(str.trimLeft());
console.log(str.trimRight());
console.log(str.trim());

function logPerson(s, name, age) {
    console.log(s, name, age);
    return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = 'Илья';
const personAge = 28;
const output = logPerson`Имя ${personName}, возраст ${personAge}!`;
console.log(output);