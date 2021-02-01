// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");

//   buildPlot(sample);

// }

// // Fetch the JSON data 
// function buildPlot(sample){
  d3.json("/samples.json").then(function(data) {
    // Display the data to understand
    //console.log(data);

    // Extract the names
    var names = data.names;
    //console.log(names);

    // Append the options to the dropdown menu
    names.forEach(x => {
      var dropDown = d3.select("#selDataset");
      var selectOption = dropDown.append("option");
      selectOption.attr("value", x).text(x);
    })

    // // Get the samples data
    // var id1 = data.samples[0];
    // console.log(id1);

    // // Extract the sample_values from the samples data
    // var sampleValue1 = id1.sample_values;
    // //console.log(sampleValue1);

    // // Sort data for from most to least
    // var value1Sorted = sampleValue1.sort((first, second) => 
    //   second - first);
    // //console.log(value1Sorted); 

    // // Use slice to get the top 10 OTUs found in that individual
    // var value1Top = value1Sorted.slice(0, 10);
    // console.log(value1Top); 

    // var sortedData = data.samples.forEach(x =>
    //   x.sort((first, second)=> second.sample_values - first.sample_values)
    //   );

    // var slicedData = sortedData.slice(0, 10);

    // console.log(slicedData);

  })
//}

// Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updatePlotly);
