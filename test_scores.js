var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function addScore() {
	var newName = $('name').value;
	var newScore = $('score').value;
	var errorName = $('errorName');
	var errorScore = $('errorScore');

	console.log(newName, newScore);

	errorName.textContent = "";
	errorScore.textContent = "";

	if (!newName || newName.trim() === "") {
		errorName.textContent = "Name cannot be empty!";
		return;
	}

	if (!newScore || isNaN(newScore)) {
		errorScore.textContent = "Invalid test score!";
		return;
	}

	names.push(newName);
	scores.push(parseInt(newScore));

	console.log('names :>> ', names);
	console.log('scores :>> ', scores);

	// Clear the input fields
	newName.value = "";
	newScore.value = "";
}

// Function to calculate and display average and highest scores
function displayResults() {
	var resultsDiv = document.getElementById("results");

	// Calculate average score
	var total = 0;
	for (var i = 0; i < scores.length; i++) {
		total += scores[i];
	}
	var average = total / scores.length;

	// Find the highest score
	var highest = Math.max(...scores);
    var highestIndex = scores.indexOf(highest);
    var highestScorer = names[highestIndex];

	// Create HTML elements for displaying results
	var heading = document.createElement("h2");
	heading.textContent = "Results";

	var averageParagraph = document.createElement("p");
	averageParagraph.textContent = "Average Score: " + average;

	var highestParagraph = document.createElement("p");
	highestParagraph.textContent = "High Score: " + highestScorer + " with a score of " + highest;

	// Clear the existing content and append new elements
	resultsDiv.innerHTML = "";
	resultsDiv.appendChild(heading);
	resultsDiv.appendChild(averageParagraph);
	resultsDiv.appendChild(highestParagraph);
	$('results').style.display = 'block';
}

function displayScores() {
	var table = document.getElementById("scores_table");
	table.innerHTML = ""; // Clear the table

    var headerRow = table.insertRow(0);
    var nameHeader = headerRow.insertCell(0);
    var scoreHeader = headerRow.insertCell(1);
    nameHeader.innerHTML = "<b style='color: #007700;'>Name</b>";
    scoreHeader.innerHTML = "<b style='color: #007700;'>Score</b>";

    for (var i = 0; i < names.length; i++) {
        var row = table.insertRow(i + 1);
        var nameCell = row.insertCell(0);
        var scoreCell = row.insertCell(1);

        nameCell.innerHTML = names[i];
        scoreCell.innerHTML = scores[i];
    }
	$('scroe-container').style.display = 'block';
}

window.onload = function () {
	$('results').style.display = 'none';
	$('scroe-container').style.display = 'none';
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


