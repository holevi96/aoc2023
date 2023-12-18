import * as fs from 'fs';
const words = fs.readFileSync('./input.txt', 'utf-8');
const wordList = words.split('\n');

let sum = 0;
wordList.forEach((word) => {
    const gameId = +(/Game (\d\d*\d*)/.exec(word)[1]);
    const bigReds = /(\d[3-9]|[2-9]\d) red/.exec(word);
    const bigBlues = /(\d[5-9]|[2-9]\d) blue/.exec(word);
    const bigGreens = /(\d[4-9]|[2-9]\d) green/.exec(word);
    if(!(bigReds || bigBlues || bigGreens)) {
        sum += gameId;
    }
});
console.log(sum);