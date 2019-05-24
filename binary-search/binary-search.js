'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let newArr = array;
	while (newArr.length <= 1) {
	let mid = Math.ceil(array.length / 2);
	console.log('this is the newarr', newArr)
		if (target === array[mid]) {
			return true;
		} else if (target > array[mid]) {
			newArr = array.slice(mid);
		} else {
			//target less than array[mid]
			newArr = array.slice(0,mid);
		}
	}
	if (array.length === 1 && array[0] === target) {
		return true;
	}
	//after everything
	return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch