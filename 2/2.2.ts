import * as fs from 'fs';
const words = fs.readFileSync('./input.txt', 'utf-8');
const wordList = words.split('\n');

let sum = 0;
wordList.forEach((word) => {

    const reds = Math.max(...word.match(/(\d\d*) red/g).map((match) => +match.match(/\d\d*/)[0]));
    const blues = Math.max(...word.match(/(\d\d*) blue/g).map((match) => +match.match(/\d\d*/)[0]));
    const greens = Math.max(...word.match(/(\d\d*) green/g).map((match) => +match.match(/\d\d*/)[0]));
    sum += reds * blues * greens;
});
console.log(sum);