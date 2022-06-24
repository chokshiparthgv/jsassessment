let arr = []; // array as a stack
let s = "(){}[]";
// let s = "({})[]";
// let s = "{)[]";
// let s = "][)}]";

function isValid(s) {
    for(let i = 0; i < s.length; i++) {
        if( s.charAt(i) == "(" || 
            s.charAt(i) == "{" || 
            s.charAt(i) == "[" ) {
            arr.push(s.charAt(i));
        }
        else {
            if(arr.length === 0) return false;
            if( (s.charAt(i)===")" && arr[arr.length-1]==="(") ||
                (s.charAt(i)==="}" && arr[arr.length-1]==="{") ||
                (s.charAt(i) === "]" && arr[arr.length-1]==="[") ) {
                    arr.pop();
            }
            else {
                return false;
            }
        }
    }
    return arr.length === 0;
}
console.log(isValid(s));