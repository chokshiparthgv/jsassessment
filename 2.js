// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// Example 1:
// Input: s = "()[]{}"
// Output: true
// Example 2:
// Input: s = "(]"
// Output: false
// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

function check() {
  const inputParanthesis = document.getElementById("x").value;
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
  if (arr.length) document.getElementById("output").innerText = "False";
  else document.getElementById("output").innerText = "True";
}
