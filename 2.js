let s = "abcdbcadefgf"
// let s = "nnojknkhab"
let m = new Map();
for(let i=1; i<=126; i++) m.set(i, 0);
let temp = "";
let unique = [];

for(let i=0; i<s.length; i++){
    if(m.get(s.charCodeAt(i))) {
        unique.push(temp);
        for(let i=1; i<=126; i++) m.set(i, 0);
        temp = s.charAt(i);
        m.set(s.charCodeAt(i), 1);
    }
    else {
        m.set(s.charCodeAt(i), 1);
        temp += s.charAt(i);
    }
}
if(temp.length) unique.push(temp);
let ans = "";
for(let i=0; i<unique.length; i++){
    if(unique[i].length > ans.length){
        ans = unique[i];
    }
}

// console.log(unique);
console.log(ans);