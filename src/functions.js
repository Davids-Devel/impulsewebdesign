/**
 * Convert the query string to JSON.
 * @param {string} url
 * @return {Object}
 */
const urlqueryParse = url => {
	let deleteQuestionSign = url.substr(1);
	let splitSearchs = deleteQuestionSign.split("&");
	let splitData = {}
	splitSearchs.forEach(e=>{
		let separateKeyValue = e.split("=")
		splitData[separateKeyValue[0]] = separateKeyValue[1];
	})
	return splitData
}

export {
	urlqueryParse
}