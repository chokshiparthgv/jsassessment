const first = "abc";
const second = "def";
var third = "abdecf";

function isValid() {
	for (let index = 0; index < third.length; index++) {
		if (third[index] === first[index]) {
			return true;
		} else {
			return false;
		}
	}
}

let valid = isValid(third);
console.log(valid);
