var aCount = 0;
var bCount = 0;
var cCount = 0;
var dCount = 0;
var fCount = 0;

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

for (var num = 0; num < scores.length; ++num) {
	var i = scores[num];
	if (i >=50 && i <= 60) {
		fCount += 1
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
	}
}

console.log("Number of As: ", aCount);
console.log("Number of Bs: ", bCount);
console.log("Number of Cs: ", cCount);
console.log("Number of Ds: ", dCount);
console.log("Number of Fs: ", fCount);
