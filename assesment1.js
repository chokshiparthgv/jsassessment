const first = "rte";
const second = "def";
const third = "ade";

/**
 *
 * @param {String} first
 * @param {String} second
 * @param {String} third
 * @returns {Object} {success: {boolean}, message: {string}}
 */
function checkShuffle(first, second, third) {
	let firstlength = [...first].length;
	let secodnlength = [...second].length;
	let thridlength = [...third].length;

	if (firstlength + secodnlength !== thridlength) {
		return {
			success: false,
			message: `length of the third element ${thridlength} is shorter then first ${firstlength} and second element ${secodnlength}`
		};
	} else {
		let sortfirst = [...first].sort();
		let sortsecond = [...second].sort();
		let sortthird = [...third].sort();
		let i = 0,
			j = 0,
			k = 0;
		while (k !== thridlength) {
			if (i < firstlength && sortfirst.includes(sortthird[i])) i++;
			else if (j < secodnlength && sortsecond.includes(sortthird[i])) j++;
			else return false;
			k++;
			return true;
		}
	}
}

/**
 * @description checks if a string is shuffle or not
 */
let answer = checkShuffle(first, second, third);
if (answer.success) {
	console.log(`${third} is a valid shuffle string`);
} else {
	console.log(answer.message);
}
