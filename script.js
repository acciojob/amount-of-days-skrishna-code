//your JS code here. If required.

let year =2004;

function daysOfAYear(year) {
	if (year%400===0 && year % 100 === 0 && year % 4 === 0 ) {
		console.log("365")
		
	} else {
		console.log("366")
		
	}
	
}