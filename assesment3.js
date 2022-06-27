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

const sample = "{}[]";
const stack = [];

function isvalid(input) {
	for (let i = 0; i < input.length; i++) {
		if (input[i] === "{" || input[i] === "[" || input[i] === "(") {
			stack.push(input[i]);
		} else if (input[i] === "}" && stack[stack.length - 1] === "{") {
			stack.pop();
		} else if (input[i] === ")" && stack[stack.length - 1] === "(") {
			stack.pop();
		} else if (input[i] === "]" && stack[stack.length - 1] === "[") {
			stack.pop();
		} else {
			return false;
		}
	}
	return stack.length === 0;
}

console.log(isvalid(sample));
