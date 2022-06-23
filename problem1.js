/**
 * Sort the string by the number of character occurances
 * @param {string} str
 * @returns {string} Sorted string
 */
function sortByOccurance(str) {
    if (typeof str !== "string") {
        throw new Error("str must be string");
    }
    let arr = str.split("");
    const occurMap = Object.fromEntries(
        [...new Set(arr)].map((x) => [x, arr.filter((y) => x === y).length])
    );
    arr = arr.sort((a, b) => {
        if (occurMap[a] < occurMap[b]) {
            return 1;
        } else if (occurMap[a] > occurMap[b]) {
            return -1;
        } else {
            return a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1;
        }
    });
    return arr.join("");
}

console.log(sortByOccurance("abcdeeadescebd"));
console.log(sortByOccurance("jksdksksjkjeocicsjskdjfkjer"));
