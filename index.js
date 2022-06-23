
// 1 assignment is done
let str1 = "i.like.this.program.very.much"
// let str1="pqr.mno"
      console.log("string Name  :",str1);
      let reverseWord=[];
      let dataReverse=[];
     for( let i = str1.length-1; i >= 0; i-=1 )
     {
          reverseWord.push(str1[i].split(" ").reverse().join(" ")); 
     }
     console.log("Reverse word :",reverseWord.join("")); 
     const data=reverseWord.join("").split(".");

     for( let i = data.length-1; i >= 0; i-=1 )
     {
        dataReverse.push(data[i].split(" ").reverse().join("").concat(".")); 
     }
     const dd = dataReverse.join("")
     console.log(dd.slice(0,dd.length-1));


//2. assignment done 
const Symbols="()[]{}";

var DataIsValid = (data) => {
  const arr = [];
  for (let i = 0; i < data.length; i++) {
      if (data[i] === '(' || data[i] === '{' || data[i] === '[') {
          arr.push(data[i]);
      }else if (data[i] === ')' && arr.length !== 0 && arr[arr.length - 1] === '(') {
          arr.pop();
      }else if (data[i] === '}' && arr.length !== 0 && arr[arr.length - 1] === '{') {
          arr.pop();
      } else if (data[i] === ']' && arr.length !== 0 && arr[arr.length - 1] === '[') {
          arr.pop();
      }else { return false; }
    }
    console.log(arr.length===0);
    return arr.length === 0;
  };
DataIsValid(Symbols);


//3.assignment done 
var jewels = "aA", stones = "aAAbbbb"; // output: 3
// var jewels = "z", stones = "ZZ";   // output: 0 
// var jewels = "aA", stones = "AAAA"; // output: 4
// var jewels = "aA", stones = "bbbbbaAbbbb"; // output: 2

const dataNum=(jewels,stones)=>{
    let ans = 0;
     for (let i = 0; i < jewels.length; i++) {
        for (let j = 0; j < stones.length; j++) {
          if(jewels[i] == stones[j])
                ans++;
        }
     } 
     return ans;
}
console.log(dataNum(jewels,stones));


// 5. assignment done

let number = 11;
let hexStr = number.toString(16);
console.log("HexaDeci to decimal : ",hexStr);

dicimal = parseInt(hexStr, 16);
console.log("Decimal  to HexaDeci: ",dicimal);

const result = number.toString(2);
console.log("Decimal to Binary   : ",result);

// HexaDeci to decimal :  b
// Decimal  to HexaDeci:  11
// Decimal to Binary   :  1011
