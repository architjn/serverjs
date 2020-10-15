module.exports = function toCamelCase(inputArr) {
	var result = '';
	for (var i = 0; i < inputArr.length; i++) {
		var currentStr = inputArr[i];
		var tempStr = currentStr.toLowerCase();
		if (i != 0) {
			tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
		}
		result += tempStr;
	}
	return result;
}