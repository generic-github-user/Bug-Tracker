var bugs = [
	{
		name: "",
		description: "Elon Musk has escaped from Earth again."
	},
	{
		name: "",
		description: "All of the pizza is on fire."
	},
	{
		name: "",
		description: "Very vicious valley-vindicating variable not varying."
	},
	{
		name: "",
		description: "Leopard not sending proper signals through USB bus. Professional Leopard repair may be required."
	},
	{
		name: "",
		description: "Does not compute."
	},
	{
		name: "",
		description: "There is an apple on the pinapple."
	},
	{
		name: "",
		description: "The frogs, unfortunately, have taken over."
	},
	{
		name: "",
		description: "The snails are getting everywhere."
	},
	{
		name: "",
		description: "MDL tooltips not updated when value is changed."
	},
	{
		name: "",
		description: "The%20last%20programmer%20to%20work%20on%20this%20project%20literally%20sent%20me%20minified%20code%20.%20.%20."
	},
	{
		name: "",
		description: "Nothing really matters . . . anyone can see . . ."
	},
	// I only found this about a week after writing this bug description: https://www.reddit.com/r/ProgrammerHumor/comments/6o7wwe/found_on_imgur/
	{
		name: "",
		description: "Someone actually thought that 'hard reboot the server' meant hit it with a hammer . . ."
	},
	{
		name: "",
		description: "Due to them all turning out to be pineapples disguised as tortoises disguised as software engineers, we had to fire the entire development team."
	},
	{
		name: "",
		description: "Someone encrypted the most important A8bt#D.RU,+D#_-EZek4ART[lA0>>m@psM$AKZ2.+D,P4B5_l7FDi:3Ch7$q+EV:.BlY>+Df'H9FCfJ?F!,70H'(K*A8,poF'R"
	},
	{
		name: "",
		description: "My basement is infested with killer pineapples."
	},
	{
		name: "",
		description: "The AI took over the research lab after someone decided to try connecting it to the internet."
	},
	{
		name: "",
		description: "A for loop nested inside a for loop nested inside a for loop nested inside a for loop nested inside a for loop nested inside a for loop nested inside a for loop nested inside a for loop crashed the server."
	},
	{
		name: "",
		description: "Trigonometry."
	}
];
for (i = 0; i < bugs.length; i ++) {
	var number = Math.round(Math.random() * (10 ** 8));
	var name = "#" + number.toString(16).toUpperCase();
	bugs[i].name = name;
}

var code = [];
for (var i = 0; i < 20; i ++) {
	var bit = [];
	var isBug;
	var bugIndex;

	for (var j = 0; j < 10; j ++) {
		if (Math.random() < 0.1) {
			isBug = true;
		}
		else {
			isBug = false;
		}
		bugIndex = Math.floor(Math.random() * bugs.length);
		bit.push(
			{
				isBug: isBug,
				bugIndex: bugIndex
			}
		);
	}

	code.push(bit);
}

function debug(row, column) {
	code[row][column].isBug = false;
	var newBugs = 0;
	for (var i = 0; i < code.length; i ++) {
		for (var j = 0; j < code[i].length; j ++) {
			if (Math.random() < 0.01 && code[i][j].isBug == false) {
				code[i][j].isBug = true;
				newBugs ++;
			}
		}
	}//check for no bugs
	update();

	var container = document.querySelector("#snackbar");
	var name = bugs[code[row][column].bugIndex].name;
	var description = bugs[code[row][column].bugIndex].description;
	var message = "Bug " + name + " fixed: '" + description + "'";
	if (newBugs > 0) {
		if (newBugs == 1) {
			message += " Unfortunately, 1 new bug was also created.";
		}
		else {
			message += " Unfortunately, " + newBugs + " new bugs were also created.";
		}
	}
	var snackbar = {
		message: message,
		timeout: 10000
	};
	container.MaterialSnackbar.showSnackbar(snackbar);
}

function update() {
	document.getElementById("panel").innerHTML = "";
		  for (var i = 0; i < code.length; i ++) {
		var row = "<div class='row'>";
		for (var j = 0; j < code[i].length; j ++) {
			var id = i + "-" + j;
			if (code[i][j].isBug == true) {
				var text = bugs[code[i][j].bugIndex].name;
				var color = "accent";
				var function_ = "debug(" + i + ", " + j + ")";
				var tooltip = "Debug";
			}
			else if (code[i][j].isBug == false) {
				var text = "&#10004;";
				var color = "colored";
				var function_ = "";
				var tooltip = "No bugs here";
			}

			var button = "\
				<button id='" + id + "' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--" + color + "  mdl-cell mdl-cell--1-col button' onclick='" + function_ + "'>\
					" + text + "\
				</button>\
				<div class='mdl-tooltip' for='" + id + "'>\
					" + tooltip + "\
				</div>\
			";
			row += button;
		}
		row += "</div>";
		document.getElementById("panel").innerHTML += row;
		  }
}

update();

// Histogram
// Merged graphs