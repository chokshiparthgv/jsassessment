/**
* Count number of jewels from given stones
* @param {string} jewels
* @param {string} stones
* @returns {number} Number of jewels
*/
function countJewels(jewels, stones) {
    if (typeof jewels !== "string"|| typeof stones !== "string") {
        throw new Error("jewels and stones must be strings")
    }
    const jewelsArr = jewels.split("")
    return stones.split("").filter(stone => jewelsArr.includes(stone)).length
}

console.log(countJewels("aA", "aAAbbbb"))
console.log(countJewels("z", "ZZ"))
