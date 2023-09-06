// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 = `hello world`;
console.log(`Довжина рядка` + ' ' +str1.length +' '+ `символів`);
let str2 = `Lorem ipsum`;
console.log(`Довжина рядка` + ' ' +str2.length +' '+ `символів`);
let str3 = `javascript is cool`;
console.log(`Довжина рядка` + ' ' +str3.length +' '+ `символів`);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let textUpper1 = "hello world"
console.log(textUpper1.toUpperCase())
let textUpper2 = "lorem ipsum"
console.log(textUpper2.toUpperCase())
let textUpper3 = "javascript is cool"
console.log(textUpper3.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let textLower1 = "HELLO WORLD"
console.log(textLower1.toLowerCase())
let textLower2 = "LOREM IPSUM"
console.log(textLower2.toLowerCase())
let textLower3 = "JAVASCRIPT IS COOL"
console.log(textLower3.toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
let trimStr = str.trim()
console.log(trimStr);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let strSplit = 'Ревуть воли як ясла повні';
let stringToarray = (str) => {
    let result1 = str.split(" ")
    return result1
}
let arr = stringToarray(strSplit);
console.log(arr)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numMap = [10,8,-7,55,987,-1011,0,1050,0];
let n =numMap.map((x) => x.toString())
console.log(n)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = (num , direction) =>{
}

sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
// ==========================
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

console.log(uuidv4());
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let descending = coursesAndDurationArray.sort((x1, x2) =>{
    return x2.monthDuration - x1.monthDuration;
})
console.log(descending)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let fiveMonths = coursesAndDurationArray.filter((x) => x.monthDuration > 5)
console.log(fiveMonths)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let idMap = coursesAndDurationArray.map((x) =>{
      x.id = uuidv4()
    return x
})
console.log(idMap);
// =========================
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
const deck = [];
const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
for (const suit of suits) {
    for (const value of values) {
        const color = suit === 'spade' || suit === 'clubs' ? 'black' : 'red';
        const card = {
            cardSuit: suit,
            value: value,
            color: color,
        };

        deck.push(card);
    }
}
// - знайти піковий туз
const spadeAce = deck.find((card) => card.cardSuit === 'spade' && card.value === 'ace');
console.log("Піковий туз:", spadeAce);
// - всі шістки
const allSixes = deck.filter((card) => card.value === `6`)
console.log("Всі шістки:", allSixes)
// - всі червоні карти
const allRed = deck.filter((card) => card.color === `red`)
console.log("Всі червоні карти:", allRed);
// - всі буби
const allDiamond = deck.filter((card) => card.cardSuit === `diamond`)
console.log("Всі буби:",allDiamond);
// - всі трефи від 9 та більше
const allClubs = deck.filter((card) => card.cardSuit === `clubs` && card.value >= `9`)
console.log(allClubs);
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const cardsBySuit = deck.reduce((result, card) => {
    result[card.cardSuit].push(card);
    return result;
}, { spade: [], diamond: [], heart: [], clubs: [] });

console.log('Карти по "мастях":', cardsBySuit);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']},
       {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
       }
];
// --написати пошук всіх об'єктів, в який в modules є sass
const allSass = coursesArray.filter((modules) => modules.modules.includes(`sass`))
console.log(allSass);
// --написати пошук всіх об'єктів, в який в modules є docker
const allDocker = coursesArray.filter((modules) => modules.modules.includes(`docker`))
console.log(allDocker);