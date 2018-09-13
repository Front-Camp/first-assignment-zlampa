/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
	let result = [];
	if (arguments.length == 1) {
		return arr[0].flags;
		break;
	} else {
		for(i = 0, i < arguments.length; i++) {
			result.concat(arr[i].flags);
		}
	}
	return result;
};

export default getFlags;
