var aCount = 0;
var bCount = 0;
var cCount = 0;
var dCount = 0;
var fCount = 0;

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

for (var num = 0; num < scores.length; ++num) {
	var i = scores[num];
	var lowestGrade;
	var highestGrade;
	if (i >=50 && i <= 60) {
		fCount += 1
		//Commented out first attempt.  Results good for this array
		//but would not return grades lower that 50 or higher than 100
		// if (lowestGrade == undefined) {
		// lowestGrade = i;
		// }
		// else if (i < lowestGrade) {
		// 	i = lowestGrade;
		// }
	}
	else if (i >=61 && i <= 70) {
		dCount += 1
	}
	else if (i >=71 && i <= 80) {
		cCount += 1
	}
	else if (i >=81 && i <= 90) {
		bCount += 1
	}
	else if (i >=91 && i <= 100) {
		aCount += 1
		// if (highestGrade == undefined) {
		// highestGrade = i;
		// }
		// else if (i > highestGrade) {
		// 	i = highestGrade;
		// }
	}
	if (lowestGrade == undefined && highestGrade == undefined) {
	lowestGrade = i;
	highestGrade = i;
	}
	else if (i < lowestGrade) {
		lowestGrade = i;
	}
	else if (i > highestGrade) {
		highestGrade = i;
	}
}

console.log("Number of As: ", aCount); //"As" as opposed to A's per Chicago Manual of Style
console.log("Number of Bs: ", bCount);
console.log("Number of Cs: ", cCount);
console.log("Number of Ds: ", dCount);
console.log("Number of Fs: ", fCount);
console.log("The lowest grade is ", lowestGrade);
console.log("The highest grade is ", highestGrade);
