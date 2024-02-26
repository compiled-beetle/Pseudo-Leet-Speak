#!/usr/bin/env node

const { program } = require('commander');

/**
 * Leet alphabet mapping for encoding and decoding.
 */
const leetAlphabet = {
    a: '4',
    b: '8',
    c: '©',
    d: '|)',
    e: '3',
    f: 'ƒ',
    g: '9',
    h: '#',
    i: '!',
    j: '_]',
    k: '|<',
    l: '1',
    m: '^^',
    n: 'ท',
    o: 'Ø',
    p: '|^',
    q: '&',
    r: '®',
    s: '5',
    t: '†',
    u: 'µ',
    v: '|/',
    w: 'v²',
    x: '><',
    y: '¥',
    z: '2'
};

/**
 * Leet numbers mapping for encoding and decoding.
 */
const leetNumbers = {
    0: 'O',
    1: 'I',
    2: 'Z',
    3: 'E',
    4: 'A',
    5: 'S',
    6: 'G',
    7: 'T',
    8: 'B',
    9: 'Q'
};

program.name('Leet-Speak-CLI').description('CLI tool to encode and decode Pseudo-Leet-Speak').version('0.0.1');

/**
 * Encodes a string into Pseudo-Leet-Speak.
 * @param {string} string - The input string to encode.
 * @returns {string} The encoded string.
 */
const encodeLeet = (string) => {
    const trimmedString = string.trim().toLocaleLowerCase().split('');
    let encodedString = '';

    for (let char of trimmedString) {
        let key = Object.keys(leetAlphabet).find((key) => key === char);
        if (key) {
            encodedString += leetAlphabet[key];
            continue;
        }

        key = Object.keys(leetNumbers).find((key) => key === char);
        if (key) {
            encodedString += leetNumbers[key];
            continue;
        }

        encodedString += char;
    }

    return encodedString;
};

/**
 * Decodes a Pseudo-Leet-Speak string into plain text.
 * @param {string} string - The Pseudo-Leet-Speak string to decode.
 * @returns {string} The decoded string.
 */
const decodeLeet = (string) => {
    const trimmedString = string.trim().split('');
    let decodedString = '';
    let skipNext = false;

    for (let index = 0; index < trimmedString.length; index++) {
        if (skipNext) {
            skipNext = false;
            continue;
        }

        let char = trimmedString[index];
        let twoChar = char + (trimmedString[index + 1] || '');

        let key = Object.keys(leetAlphabet).find((key) => leetAlphabet[key] === char || leetAlphabet[key] === twoChar);
        if (key) {
            decodedString += key;
            if (leetAlphabet[key] === twoChar) skipNext = true;
            continue;
        }

        key = Object.keys(leetNumbers).find((key) => leetNumbers[key] === char);
        if (key) {
            decodedString += key;
            continue;
        }

        decodedString += char;
    }

    return decodedString;
};

program
    .option('-e, --encode', 'encode the input string')
    .option('-d, --decode', 'decode the input string')
    .option('-s, --string <string>', 'input string to encode or decode');

const helpInfo = `
Examples:
  npm start -- -e -s "hello"
  npm start -- -d -s "h3ll0"
`;

program.on('--help', () => {
    console.log(helpInfo);
});

program.parse(process.argv);

const { encode, decode, string } = program.opts();

if ((!encode && !decode) || !string) {
    console.error('invalid command. provide correct the arguments.');
    console.log(helpInfo);
} else {
    if ((encode && decode) || (!encode && !decode)) {
        console.error('invalid command. Please provide either -e, --encode or -d, --decode.');
        console.log(helpInfo);
    } else {
        if (encode) {
            const encodedString = encodeLeet(string);
            console.log('string:  ', string);
            console.log('encoded: ', encodedString);
        }
        if (decode) {
            const decodedString = decodeLeet(string);
            console.log('string:  ', string);
            console.log('decoded: ', decodedString);
        }
    }
}
