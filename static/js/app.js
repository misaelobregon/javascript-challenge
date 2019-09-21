// From data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");

function buildTable(dat){
	tbody.html("");	// To clear data
	dat.forEach((dataRow) => {
	    // Append table row 'tr' to table body ‘tbody’
	    var row = tbody.append("tr");
	    // Use ‘object.entries’ to iterate values
	    Object.entries(dataRow).forEach(([key,value]) => {
		    var cell = row.append("td");
		    cell.text(value);
	    });
    })
}


// Event function when date is entered and "Filter Table" button is clicked
function handleClick(){
    // Prevents page refresh
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;

    // If condition when date is entered and filtered
    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Rebuild table with filtered data
    buildTable(filterData);
}

d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js; NOTE: if viewer prefers an empty table at start comment "//buildTable(tableData)" code
buildTable(tableData);
