# Pseudo-Leet-Speak

This is a simple Node.js application for encoding and decoding strings into personalized Pseudo-Leet-Speak-CLI.

## Installation

1. Clone the repository: `git clone https://github.com/compiled-beetle/Pseudo-Leet-Speak`
2. Navigate to the project directory: `cd Pseudo-Leet-Speak`
3. Install dependencies: `npm install`

## Usage

To encode a string into Pseudo-Leet-Speak, run:

```
npm start -- -e -s "<input_string>"
```

To decode a Pseudo-Leet-Speak string, run:

```
npm start -- -d -s "<leet_string>"
```

## Options

-   `-e, --encode`: Encode the input string
-   `-d, --decode`: Decode the input string
-   `-s, --string <string>`: Input string to encode or decode
-   `-h, --help`: Display help for command

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
