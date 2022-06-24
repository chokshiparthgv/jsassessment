/**
* Validate if string have valid starting and closing brackets
* @param {string} str - String to verify
* @returns {boolean} String is valid or not
*/
function validateString(str) {
    const BRACKET_MAP = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    const startingBrackets = [];
    for (const char of str.split("")) {
        if (Object.values(BRACKET_MAP).includes(char)) {
            startingBrackets.push(char);
        } else if (
            Object.keys(BRACKET_MAP).includes(char) &&
            BRACKET_MAP[char] !== startingBrackets.pop()
        ) {
            return false;
        }
    }
    return startingBrackets.length === 0;
}

console.log(validateString("()[]{}"));
console.log(validateString("(}"));
// Bonus:
console.log(validateString("{!123}([Hello]World)"));
