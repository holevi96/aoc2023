import * as fs from 'fs';
const words = fs.readFileSync('./input.txt', 'utf-8');
const wordList = words.split('\n');

let sum = 0;
wordList.forEach((word) => {
    const numberChars: string[] = [];
    for (const char of word) {
        if (char.match(/\d/)) {
            numberChars.push(char);
        }
    }
    const number = parseInt(numberChars[0] + numberChars[numberChars.length - 1]);
    sum += number;
});
console.log(sum);