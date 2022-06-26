let s = "()[]{}";
let temp = [];

for (let item of s) {
    console.log(item);
    if (item == "(" || item == "{" || item == "[") {
        temp.push(item);
    } else if (item == ")" && temp[temp.length - 1] == "(" ||
        item == "}" && temp[temp.length - 1] == "{" ||
        item == "]" && temp[temp.length - 1] == "[") {
        temp.pop();
    }
}
console.log(temp.length ? false : true); 
