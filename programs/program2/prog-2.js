const number = parseInt(prompt('Enter number of terms: '));
const arr = [];
let n1 = 0, n2 = 1, nextTerm;

console.log('Addition of two previous numbers');

for (let i = 1; i <= number; i++) {
    arr.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
document.write(arr)
