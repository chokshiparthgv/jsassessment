/**
 * Convert Decimal to Hexadecimal
 * @param {number} decimalNum
 * @returns {string} Hexadecimal Number
 */
function convertToHex(decimalNum) {
    if (typeof decimalNum !== "number") {
        throw new Error("Invalid number passed")
    }
    return decimalNum.toString(16);
}

/**
 * Convert Hexadecimal to Decimal
 * @param {string} hexNum
 * @returns {number} Decimal Number
 */
function convertToDecimal(hexNum) {
    const decimalNum = parseInt(hexNum, 16)
    if (hexNum !== convertToHex(decimalNum)){
        throw new Error("Invalid hexadecimal number passed")
    }
    return decimalNum
}

const example1 = convertToHex(120);
const example2 = convertToHex(9385092);

// Hexadecimal
console.log(example1);
console.log(example2);

// Decimal
console.log(convertToDecimal(example1));
console.log(convertToDecimal(example2));
