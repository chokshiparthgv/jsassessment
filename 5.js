let num, ans, base;



// decimal to octal
num = 23;
ans = 0;
base = 1;
while (num) {
    let lastDigit = num % 8;
    num = Math.floor(num/8);
    ans += lastDigit * base;
    base *= 10;
}
console.log(ans); // 27



// ocatal to decimal
num = 27;
ans = 0;
base = 1;
while (num) {
    let lastDigit = num % 10;
    num = Math.floor(num/10);
    ans += lastDigit*base;
    base *= 8;
}
console.log(ans);  // 23