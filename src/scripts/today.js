function getDayOfYear(input){
	var now = new Date();
	var start = new Date(now.getFullYear(), 0, 0);
	var diff = now - start;
	var oneDay = 1000 * 60 * 60 * 24;
	var unusedVar = 10 * 10;

	return Math.floor(diff / oneDay);
}

var day = getDayOfYear();
console.log("Idag er den " + day + '. dagen i året.');
