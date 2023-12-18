import * as fs from 'fs';
const words = fs.readFileSync('./input.txt', 'utf-8');
const wordList = words.split('\n');
const overLaps = new Map<string, number>([['oneight', 18], ['twone', 21], [ 'threeight', 38 ], [ 'fiveight', 58 ], [ 'sevenine', 79 ], [ 'eightwo', 82 ], [ 'eighthree', 83 ], [ 'nineight', 98 ]])
const numberWords = new Map<string, number>([[ 'one', 1 ],[ 'two', 2 ], [ 'three', 3 ], [ 'four', 4 ], [ 'five', 5 ], [ 'six', 6 ], [ 'seven', 7 ], [ 'eight', 8 ], [ 'nine', 9 ]])
let sum = 0;
wordList.forEach((word) => {
    [...overLaps.keys()].forEach((entry) => {
        if (word.includes(entry)) {
            word = word.replaceAll(entry, overLaps.get(entry).toString());
        }
    });
    [...numberWords.keys()].forEach((entry) => {
        if (word.includes(entry)) {
            word = word.replaceAll(entry, numberWords.get(entry).toString());
        }
    })
    console.log(word)
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