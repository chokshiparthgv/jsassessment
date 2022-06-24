let first = "abc";
let second =  "def";
let third = "abdfce";
// let third = "abcdef";

function isValid(first, second, third) {
    let size1 = first.length;
    let size2 = second.length;
    let size3 = third.length;
    let i = 0, j = 0, k = 0;
    while(k < size3) {
        if(i < size1 && third.charAt(k) === first.charAt(i)){
            i++;
            k++;
        }
        else if(j < size2 && third.charAt(k) === second.charAt(j)){
            j++;
            k++;
        }
        else {
            return false;
        }
    }
    return i == size1 && j == size2;
}
console.log(isValid(first, second, third));