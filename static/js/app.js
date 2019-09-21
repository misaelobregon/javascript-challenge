// From data.js
var tableData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");

function buildTable(data){
	//tbody.html("");	// To clear data
	data.forEach((dataRow) => {
	    // Append table row 'tr' to table body ‘tbody’
	    var row = tbody.append("tr");
	    // Use ‘object.entries’ to iterate values
	    Object.entries(dataRow).forEach((value) => {
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
// Build Table with data.js 
buildTable(tableData);







  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
  //var ages = filteredData.map(person => person.age);

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  //var mean = math.mean(ages);
  //var median = math.median(ages);
  //var mode = math.mode(ages);
  //var variance = math.var(ages);
  //var standardDeviation = math.std(ages);

  // Then, select the unordered list element by class name
  //var list = d3.select(".summary");

  // remove any children from the list to
  //list.html("");

  // append stats to the list
  //</script>/list.append("li").text(`Mean: ${mean}`);
  //list.append("li").text(`Median: ${median}`);
  //list.append("li").text(`Mode: ${mode}`);
  //list.append("li").text(`Variance: ${variance}`);
  //list.append("li").text(`Standard Deviation: ${standardDeviation}`);
//});
