#!/usr/bin/env node

const { program } = require('commander');

/**
 * Leet alphabet mapping for encoding and decoding.
 */
const leetAlphabet = {
    a: '4',
    c: '©',
    d: '|)',
    e: '3',
    g: '9',
    h: '#',
    i: '!',
    j: '_]',
    k: '|<',
    l: '1',
    n: 'ท',
    o: 'Ø',
    p: '|^',
    q: '&',
    s: '5',
    t: '†',
    v: '|/',
    w: 'v²',
    x: '><',
    z: '2',
    m: '^^',
    f: 'ƒ',
    b: '8',
    r: '®',
    y: '¥',
    u: 'µ'
};

/**
 * Leet numbers mapping for encoding and decoding.
 */
const leetNumbers = {
    1: 'I',
    2: 'Z',
    3: 'E',
    4: 'A',
    5: 'S',
    6: 'G',
    7: 'T',
    8: 'B',
    9: 'Q',
    0: 'O'
};

program.name('Leet-Speak-CLI').description('CLI tool to encode and decode Pseudo-Leet-Speak').version('0.0.1');

/**
 * Encodes a string into Pseudo-Leet-Speak.
 * @param {string} string - The input string to encode.
 * @returns {string} The encoded string.
 */
const encodeLeet = (string) => {
    // todo: implement the encoding logic
    return encodedString;
};

/**
 * Decodes a Pseudo-Leet-Speak string into plain text.
 * @param {string} string - The Pseudo-Leet-Speak string to decode.
 * @returns {string} The decoded string.
 */
const decodeLeet = (string) => {
    // todo: implement the decoding logic
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
