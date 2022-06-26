let arr = [6, 5];
let answer = [];
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

for (let i = 0; i < arr.length; i++) {
    answer.push(factorial(arr[i]))
}

console.log(answer);