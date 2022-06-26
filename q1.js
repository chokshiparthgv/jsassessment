let s = "abcdbcadefgf";
let storeArray = [];
let tempS = "";
let ans = "";

for (let item of s) {
    if (tempS.includes(item)) {
        storeArray.push(tempS);
        tempS = "";
    }
    tempS += item;
    // console.log(tempS);
}
if (tempS.length) {
    storeArray.push(tempS);
}
// console.log(storeArray);

for (let index = 0; index < storeArray.length; index++) {
    if (storeArray[index].length > ans.length) {
        ans = storeArray[index];
    }

}
console.log(ans);