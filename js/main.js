//keeps track of where we are in the table
var tableIndex = 0;

$(document).ready(function() {
	updateTable();
	updatePageNum();
	
});

//refreshes the table
function updateTable() {
	var table = document.getElementById("dataTable");
	var tableData = "";
	tableData = getHeaderTableData();
	for (var i = tableIndex; i < tableIndex + 10; i++) {
		if (i < countryData.length) {
			var countryList = convertCountryToList(countryData[i]);
			tableData += generateTr(countryList, false);
		} else {
			const emptyData = ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"];
			tableData += generateTr(emptyData, false);
		}
	}
	
	
	table.innerHTML = tableData;
}

//Advances the table to the next table page when the forward button is pressed
$(".next").click(function() {
	if (tableIndex  + 10 < countryData.length) {
		tableIndex = tableIndex + 10;
		updateTable();
	}
	updatePageNum();
});

//Takes the user to the previous table page when the back button is pressed
$(".prev").click(function() {
	if (tableIndex - 10 >= 0) {
		tableIndex = tableIndex - 10;
		updateTable();
	}
	updatePageNum();
});

//Converts an individual country to a list of values to display in the table
function convertCountryToList(country) {
	const countryList = [country.countryName, country.sRank, country.sGold, country.sSilver, country.sBronze, 
		country.sTotal, country.wRank, country.wGold, country.wSilver, country.wBronze, country.wTotal, country.overallRank, country.tGold, country.tSilver, country.tBronze, country.tMedals];
	return countryList;
}

//Updates the text telling the user which page they are currently on
function updatePageNum() {
	var string1 = document.getElementById("pageNumTop");
	var string2 = document.getElementById("pageNumBottom");
	var current = Math.floor(tableIndex / 10) + 1;
	var max = Math.floor(countryData.length / 10) + 1;
	if (string1) {
		string1.innerHTML = "Showing page " + current + " of " + max;
	}
	if (string2) {
		string2.innerHTML = "Showing page " + current + " of " + max;
	}

}

//Creates the table header with the descriptions
function getHeaderTableData() {
	const headers = ["Team (IOC Code)", "Summer Rank", "Summer Gold", "Summer Silver", "Summer Bronze", "Summer Total", "Winter Rank", "Winter Gold", "Winter Silver", "Winter Bronze", "Winter Total", "Overall Rank", "Total Gold", "Total Silver", "Total Bronze", "Total Medals"];
	return generateTr(headers, true);
}

//Creates the html necessary for a row given a list of data and whether it should create a header or normal data row
function generateTr(data, isHead) {
	var row = "<tr>";
	for (const i of data) {
		if (isHead) {
			row = row + generateTh(i);
		} else {
			row = row + generateTd(i);
		}
	}
	row = row + "</tr>";
	return row;
}

//Creates a single th element given a string
function generateTh(data) {
	return "<th>" + data + "</th>";
}

//creates a single td element given a string
function generateTd(data) {
	return "<td>" + data + "</td>";
}