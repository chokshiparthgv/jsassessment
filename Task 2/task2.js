// 2. Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.  
// Page Break
 
// An input string is valid if:  
// 1. Open brackets must be closed by the same type of brackets. 
// 2. Open brackets must be closed in the correct order. 
// Example 1: 
// Input: s = "()[]{}" 
// Output: true 
// Example 2: 
// Input: s = "(]" 
// Output: false


function demo()
{
    const inputParanthesis = document.getElementById("symbol").value;
    const arr = [];

    for (let char of inputParanthesis) {
      if (char === ")" && arr[arr.length - 1] === "(") {
        arr.pop();
      } else if (char === "]" && arr[arr.length - 1] === "[") {
        arr.pop();
      } else if (char === "}" && arr[arr.length - 1] === "{") {
        arr.pop();
      } else {
        arr.push(char);
      }
    }

    if(arr.length)
    document.getElementById("output").innerText = "False"
    else
    document.getElementById("output").innerText = "True"
    
    // console.log(
    //   `The input paranthesis ${inputParanthesis} is ${
    //     arr.length ? "false" : "true"
    //   }`
    // );
  };

//   isValid(inputParanthesis);





// function demo()
// {

//     const symbol = document.getElementById("symbol").value;
//     const stack = [];
//     var top = stack[stack.length-1];
//     var cBracket = 0;
//     var curlyBracket = 0;
//     var sqBracket = 0;
//     for(i=0;i<symbol.length;i++)
//     {
//         if(symbol[i] == '(')
//         cBracket++;

//         if(symbol[i] == '{')
//         curlyBracket++;

//         if(symbol[i] == '[')
//         sqBracket++;

//         if(symbol[i] == ')')
//         cBracket--;

//         if(symbol[i] == '}')
//         curlyBracket--;

//         if(symbol[i] == ']')
//         sqBracket--;

//     }

//     if(cBracket == 0 && curlyBracket == 0 && sqBracket == 0)
//     {
//         document.getElementById("output").innerText = "True"
//     }
//     // if(stack.length == 0 )
//     // {
//     //     document.getElementById("output").innerText = "True"
//     // }

//     else
//     document.getElementById("output").innerText = "False"

// }
